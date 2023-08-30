
function Modal({ title, open, onOk, footer, children }: any) {
    const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
        // 仅当点击模态框外部区域（模态框遮罩层）时关闭模态框
        if (event.target === event.currentTarget) {
          onOk();
        }
      };

    if (!open) return null;
  
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal">
          <div className="modal-header">
            <h3>{title}</h3>
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            {footer !== null ? (
              footer || (
                <button onClick={onOk} className="ok-button">
                  OK
                </button>
              )
            ) : null}
          </div>
        </div>
      </div>
    );
  }

export default Modal;