import '../Home.css';

const Home = () => {
    
    
    return(
        <div>
            <h1>Headline</h1>
            <div className="main-container">
                <div className="column-item">
                    <div className="card">
                        <img src="../images/plant.jpg" alt="dummy" />
                        <h2>Subhead 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse perspiciatis, amet ex maxime sint?</p>
                        <button>Button</button>
                    </div>

                </div>
                <div className="column-item">
                    <div className="card">
                    <img src="../images/plant2.jpg" alt="dummy" />
                        <h2>Subhead 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse perspiciatis, amet ex maxime sint?</p>
                        <button>Button</button>
                    </div>
                    
                </div>
                <div className="column-item">
                    <div className="card">
                    <img src="../images/plant3.jpg" alt="dummy" />
                        <h2>Subhead 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse perspiciatis, amet ex maxime sint?</p>
                        <button>Button</button>
                    </div>
                    
                </div>
            </div>
            <div className="text-container">
                <div className="text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloremque explicabo ipsum voluptate sit mollitia fugit delectus aliquam dolore accusamus?</p>
                </div>
                <div className="text-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloremque explicabo ipsum voluptate sit mollitia fugit delectus aliquam dolore accusamus?</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;