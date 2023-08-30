/**
 * @param {visible} 控制Drawer显示
 *  onClose 关闭回调
 *  title 标题
 *  width 宽度
 *  zIndex zIndex
 *  placement 抽屉方向
 *  mask 是否展示遮罩
 *  maskClosable 点击遮罩是否关闭
 *  closable 是否显示右上角关闭按钮
 *  destroyOnClose 关闭抽屉销毁子元素
 *  getContainer 指定 Drawer 挂载的 HTML 节点, 可以将抽屉挂载在任何元素上
 *  drawerStyle 能自定义抽屉弹出层样式
 */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

interface IpropsDrawer {
  visible: boolean;
  title: React.ReactNode;
  width: number;
  onClose: () => void;
  zIndex: number;
  placement: string;
  mask: boolean;
  maskClosable: boolean;
  closable: boolean;
  destroyOnClose: boolean;
  getContainer: HTMLElement | false;
  drawerStyle: any;
  children: any
}
type Iprops = IpropsDrawer;

export const Drawer: React.FC<Partial<Iprops>> = (props) => {
  const {
    visible,
    title = '',
    closable = true,
    width = 300,
    onClose,
    zIndex = 1000,
    placement = 'right',
    mask = true,
    maskClosable = true,
    destroyOnClose = true,
    getContainer = document.body,
    drawerStyle,
    children
  } = props;

  // 控制关闭弹框清空弹框里面的元素
  const [clearContentDom, setClearContentDom] = useState(false);

  // 控制drawer 的显示隐藏
  const [drawerVisible, setDrawerVisible] = useState(visible);
  useEffect(() => {
    setDrawerVisible(() => {
      if (getContainer !== false && visible) {
        getContainer.style.overflow = 'hidden';
      }
      return visible;
    });
    if (visible) {
      setClearContentDom(false);
    }
  }, [visible]);

  // 点击弹框关闭
  const handleClose = () => {
    setDrawerVisible((prev) => {
      if (getContainer !== false && prev) {
        getContainer.style.overflow = 'auto';
      }
      return false;
    });
    onClose && onClose();
    if (destroyOnClose) {
      setClearContentDom(true);
    }
  };

  const drawerDom = (
    <div
      className={'drawerWarp'}
      style={{
        width: drawerVisible ? '100%' : '0',
        zIndex,
        position: getContainer === false ? 'absolute' : 'fixed',
      }}
    >
      {mask && (
        <div
          className={"drawerMask"}
          style={{ opacity: drawerVisible ? 1 : 0 }}
          onClick={maskClosable ? handleClose : undefined}
        ></div>
      )}
      <div
        className={classnames("drawerContent", !drawerVisible ? "closeDrawer" : '')}
        style={{
          width,
          [placement]: 0,
          ...drawerStyle,
        }}
      >
        {title && <div className={"titleDrawer"}>{title}</div>}
        <div style={{ padding: 16 }}>{clearContentDom ? null : props.children}</div>
        {closable && (
          <span className={"closeDrawerBtn"} onClick={handleClose}>
            X
          </span>
        )}
      </div>
    </div>
  );


  return getContainer === false && !getContainer
    ? drawerDom
    : ReactDOM.createPortal(drawerDom, getContainer);
};
