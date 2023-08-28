import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../../components/map'), {
    ssr: false,
});

const Map = () => {

    return (
        <MapWithNoSSR />
    );
};

export default Map;
