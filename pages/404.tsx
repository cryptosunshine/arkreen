import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div style={{width:'100%',textAlign:'center',color:'#101010'}}>
            <h1 >404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go back to home</Link>
        </div>
    );
};

export default NotFoundPage;
