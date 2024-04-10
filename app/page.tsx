import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <span>Home</span>
        </div>
    );
};

export default Home;
