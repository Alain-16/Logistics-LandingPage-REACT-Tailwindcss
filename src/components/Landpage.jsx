import warehouse1 from '../images/warehouse.png'
import land from '../images/land.png'
import air from '../images/air.png'
import water from '../images/ocean.png'
import six from '../images/6.png'
import delivery from '../images/delivery.jpg'
import warehouse2 from '../images/warehouse.jpg'
import distribution from '../images/distribution.jpg'
import user from '../images/user.jpg'
import logo from '../images/M-small.png'


function landpage(){
    return(
        <>
        <div className="container min-w-full min-h-screen">
        <div className=" bg-[url('images/bgimage2.jpg')] bg-cover bg-center h-lvh">
           <nav className="bg-slate-10 h-16 min-w-full w-10 flex items-center">
                 <img src={logo} width="50px" className="ml-2" alt=""/> <h1 className="font-semibold text-3xl ml-2" style={{color: "#FF3F39"}}>oovit</h1>
           
            <ul className="flex-1 text-center">
                
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2 font-serif">Home</a></li>
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2">Services</a></li>
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2">Company</a></li>
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2">News</a></li>
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2">Resources</a></li>
                <li className="list-none inline-block px-5 text-center"><a href="/" className="no-underline text-gray-50 font-bold text-lg px-2">Contacts</a></li>
            </ul>
            </nav>
            <div className="flex items-start justify-center  h-screen mt-16">
                <div className="w-max mx-100 text-center">
                    <h1 className="text-8xl font-bold font-sans text-slate-100">Moovit</h1>
                    <br></br>
                    <h2 className="text-6xl font-bold text-slate-50 font-serif">Taking Logistics to Another Level</h2>
                    <br></br>
                    <p className="text-slate-400 font-bold text-2xl">Moovit has a proven methodology for engaging customers using collaborative solution.</p>
                    <br></br>
                    <button className="rounded-full border-2 border-cyan-300  text-slate-50
                    px-6 py-6 hover:bg-yellow-300 ml-10" style={{backgroundColor: "#FF3F39"}}>Need to make an enquiry</button>
                    <button className="rounded-full border-2 border-teal-400 bg-yellow-700 text-slate-50
                    px-6 py-6 hover:bg-lime-300 ml-10" style={{backgroundColor: "#FF3F39"}}>Want to buy a plan</button>
                </div>
            </div>  
        </div>  
        <div className="flex flex-col justify-center items-center">
             <h1 className="border border-sky-500 w-2/12 text-center mt-14 bg-red-500 text-white font-bold text-2xl border-none rounded-full">OUR SERVICE</h1>
        <p className="mt-6 font-bold  text-slate-900" style={{fontFamily: 'Poppins', fontSize: "40px;"}}>We provide full assistance in <br></br>freight and warehousing.
        </p>
        </div> 
        <div className="flex justify-around mt-12">
            <div className=" w-1/4 shadow-2xl">
                <img src={land} width= "300px" alt=""/>
                <h1 className="text-center text-black font-bold text-4xl" style={{fontFamily: 'Poppins'}}>Land Express</h1>
                <p className="text-slate-400 mt-6 text-center" style={{fontFamily: 'Poppins'}}>
                    Our non-asset based Land network provides you with flexibility, improved service and accelerated delivery.</p>
            </div>
            <div className="w-1/4 shadow-2xl">
                <img src={air} width= "300px" alt=""/>
                <h1 className="text-center text-black font-bold text-4xl" style={{fontFamily: 'Poppins'}}>Air freight</h1>
                <p className="text-slate-400 mt-6 text-center" style={{fontFamily: 'Poppins'}}>
                    
						Airfreight is fast-moving, challenging and constantly changing – it’s the nature of the business.</p>
            </div>
            <div className="w-1/4 shadow-2xl">
                <img src={water} width= "300px" alt=""/>
                <h1 className="text-center text-black font-bold text-4xl" style={{fontFamily: 'Poppins'}}>Ocean Freight</h1>
                <p className="text-slate-400 mt-6 text-center"style={{fontFamily: 'Poppins'}}>

                    Customized solutions for your specific ocean freight requirement are at the heart of our services. </p> 
                </div>
        </div> 
        <p className="mt-16 text-center text-slate-500 font-semibold" style={{fontFamily:'Poppins'}}>Our list of services does not end here. We’ll adapt to your particular needs.<a href="/" className="pl-14 text-red-500 font-bold text-xl" style={{fontFamily: 'Poppins'}}>Get a Quote for Your Business
        </a></p>  
        
        <div className="grid grid-cols-2 gap-60 mt-24">
            <div className="h-60">
                <iframe width="700" height="500" title="video" src="https://www.youtube.com/embed/oW257zA7aUo" frameborder="0" allowfullscreen className="ml-5"></iframe>

            </div>
            <div className="w-12/12 h-lvh">
                <h1 className="text-center mt-48 font-bold" style={{fontFamily: 'Poppins', fontWeight:'700', fontSize: "40px", color: "#131c21"}}>Logistics Solutions</h1>
                <h5 className="text-center text-slate-400" style={{fontFamily: 'Poppins',fontWeight:'700', fontSize: "18px",fontStyle:'normal'}}>Providing an independent advice and identifying the right fit for you. Services are sourced and procured based on solution specifications provided by our Supply Chain Solution.</h5>
                <img src={six} className="mt-16" alt=""/>
            </div>
        </div>
        <div className="mt-64 flex justify-around">
            <div className="w-3/12">
                <img src={delivery} width="350px" alt=""/>
                <h1 className="font-semibold pl-0" style={{fontSize: "20px", fontFamily: 'inherit;'}}>Customized Fleet Technology</h1>
                <span className="font-semibold pl-0" style={{fontSize: "20px", fontFamily: 'inherit;'}}>Solutions.</span>
                <p className="mt-3 text-slate-400">As a warehouse manager, you would understand that handling warehouse operations are a massive task.</p>
                <div className="flex">
                    <img src={user} width="30" height="30" className="mt-3" alt=""/>
                    <h6 className="mt-4 pl-3">
                        by Louise Masterson
                    </h6>
                </div>
                
            </div>
            <div className="w-3/12">
                <img src={warehouse2} style={{width:"350px", height:"260px"}} alt=""/>
                <h1 className="font-semibold pl-2" style={{fontSize: "20px", fontFamily: 'inherit;'}}>Managing the Inbound Auto Supply chain.</h1>
                <p className="mt-3 text-slate-400">A lot of logistics professionals use the terms warehouse and distribution center interchangeably. Some of them even.</p>
                <div className="flex">
                    <img src={user} width="30" height="30" className="mt-5" alt=""/>
                    <h6 className="mt-6 pl-3">
                        by Louise Masterson
                    </h6>
                </div>
            </div>
            <div className="w-3/12">
                <img src={distribution} alt="" />
                <h1 className="font-semibold pl-2" style={{fontSize: "20px", fontFamily: 'inherit;'}}>Optimizing Activities in Distributions.</h1>
                <p className="mt-3 text-slate-400">For this global industrial manufacturer of vehicles and engines, production depends on exceptional.</p>
                <div className="flex">
                    <img src={user} width="30" height="30" className="mt-3" alt=""/>
                    <h6 className="mt-4 pl-3">
                        by Louise Masterson
                    </h6>
                </div>
            </div>
        </div>
        <div className="flex bg-slate-900 justify-around mt-20">
            <div className="h-72">
                <img src={logo} className="mt-20" alt=""/>
                <p className="mt-6 text-slate-400">
                    St15 Kabuga Rd Kigali,</p>
                     <span className=" text-slate-400 mt-3">New York.</span>
                     <br></br>
                    <a className="text-slate-400 mt-8" href="google.com">
                        +250 783247789
                    </a>
                    <br></br>
                        <a className="text-slate-400 mt-10" href="gmail.com">
                            mugishalain81@gmail.com
                        </a>
                            
            </div>
            <div className="">
                <h5 className="font-semibold text-slate-50 w-40 mt-16" style={{fontFamily: "Poppins;" ,fontSize: "25px;"}}>Services</h5>
                <ul className="mt-6">
                    <li className="text-slate-400">Air Freight</li>
                    <li className="text-slate-400">ocean Freight</li>
                    <li className="text-slate-400">Railway Freight</li>
                    <li className="text-slate-400">warehousing</li>
                    <li className="text-slate-400">Distribution</li>
                    <li className="text-slate-400">value added</li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-slate-50 w-40 mt-16" style={{fontFamily: "Poppins;" ,fontSize: "25px;"}}>Company</h5>
                <ul className="mt-6">
                    <li className="text-slate-400">Mission</li>
                    <li className="text-slate-400">Why choose us ?</li>
                    <li className="text-slate-400">Case studies</li>
                    <li className="text-slate-400">Our certificates</li>
                    <li className="text-slate-400">Our partners</li>
                    <li className="text-slate-400">Contact us</li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-slate-50 w-40 mt-16" style={{fontFamily: "Poppins;" ,fontSize: "25px;"}}>Industries</h5>
                <ul className="mt-6">
                    <li className="text-slate-400">Global coverage</li>
                    <li className="text-slate-400">Distribution</li>
                    <li className="text-slate-400">Accounting tools</li>
                    <li className="text-slate-400">Freight recovery</li>
                    <li className="text-slate-400">Supply chain</li>
                    <li className="text-slate-400">Warehousing</li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-slate-50 w-40 mt-16" style={{fontFamily: "Poppins;" ,fontSize: "25px;"}}>Usefull links</h5>
                <ul className="mt-6">
                    <li className="text-slate-400">Careers</li>
                    <li className="text-slate-400">Price table</li>
                    <li className="text-slate-400">Cost calculator</li>
                    <li className="text-slate-400">Location</li>
                    <li className="text-slate-400">FAQ</li>
                    <li className="text-slate-400">About us</li>
                </ul>
            </div>
        </div>
       
    </div>
        </>
    )
}
export default landpage;