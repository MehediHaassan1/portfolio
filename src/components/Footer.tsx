const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto h-10 text-white flex items-center justify-center">
                All rights reserved by the author &copy;{" "}
                {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default Footer;
