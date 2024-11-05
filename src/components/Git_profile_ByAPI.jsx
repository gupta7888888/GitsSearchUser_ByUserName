import React, {useState,useEffect} from "react";
import './components.css'
import { CiLocationOn } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


function Git_Profile_ByAPI(){
    const [imgurl, setImgurl]= useState('');
    const [fullname,setFullname ] = useState('')
    const [username, SetUsername]= useState("gupta7888888")
    const [join_date, setJoin_date]= useState('')
    const [bio, setBio] = useState('')
    const [repos, setRepos]= useState('')
    const [followers, setFollowers]= useState('')
    const [following, setFollowing] = useState('')
    const [location, setLocation]= useState('')
    const [twitterurl, setTwitterurl] = useState('')
    const [blogurl, setBlogurl]= useState('')
    const [workat, setWorkat] = useState('')


    const fetchAPi= ()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=> response.json())
        .then(data=>{
            setImgurl(data.avatar_url);
            setFullname(data.name);
            // SetUsername(data.login);
            setJoin_date(new Date(data.created_at).toDateString())
            setBio(data.bio)
            setRepos(data.public_repos)
            setFollowers(data.followers)
            setFollowing(data.following)
            setLocation(data.location)
            setTwitterurl(data.twitter_username)
            setBlogurl(data.blog)
            setWorkat(data.company)
            
            
        
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    useEffect(() =>{
        fetchAPi();
    },[]);

    const handleChange = (e)=>{
        SetUsername(e.target.value)
    }

    const [switch_mode, setSwitch_mode]= useState(true);
    const handleSwitchmode = () => {
        setSwitch_mode(!switch_mode);
        
        if (!switch_mode) { 
          document.body.style.backgroundColor = 'rgba(8, 8, 41, 0.959)';
          document.body.style.color = 'white';
          
          const elements = document.querySelectorAll('.whole_div, .whole_div *');
          elements.forEach(element => {
            element.style.color = 'white';
          });
        } else {
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          
          
          const elements = document.querySelectorAll('.whole_div, .whole_div *');
          elements.forEach(element => {
            element.style.color = 'black';})
            const elementss = document.querySelectorAll('.fol_sec, .fol_sec *');
          elementss.forEach(element1 => {
            element1.style.color = 'white';
          });
        }      };
      
        
      const [input_value, setInputValue]=useState('')
        const handleinput = ()=>{
            value_input = document.querySelector()
            setInputValue(input)
        }

    return (
        

        <div className="whole_div flex justify-center items-center flex-col">
            <div className="mt-[80px] mb-[30px] font-bold text-[20px] text-white top_info flex gap-[400px]">
                
                <p className="font-bold text-[20px]">devfinder</p>
                <div className="flex gap-2 items-center">
                    
                <button className="flex items-center gap-2" onClick={handleSwitchmode}> 
                    {switch_mode ? 'Dark' : 'Light'} 
                    {switch_mode ? <MdDarkMode /> : <MdLightMode />} </button>

                    
                </div>
                </div>
            <div className=" flex text-[20px] search_div mb-5 rounded-[10px] items-center">
                <div className="text-white"><FaSearch /></div>
                <input className="bg-transparent outline-none placeholder:text-[15px] pl-8 text-white w-[450px] h-[60px] " value={username} onChange={handleChange} placeholder="Search Github username..." type="text" />
                <button onClick={fetchAPi} className="text-white  font-bold bg-blue-800 rounded-[10px] btn_cls">Search</button>
            </div>


            <div className="flex p-6 gap-10 container justify-center items-center w-fit max-w-[900px] rounded-[10px]">
            <div>
            <img className="mt-[-60px] rounded-full h-24 min-h-24 w-24 min-w-24" src={imgurl} alt="ProfilePic" />
            </div>
            <div>
                <div className="flex gap-20">
                <div>
                    <p className="text-white font-bold">{fullname}</p>
                    <p className="text-blue-600">{username}</p>
                </div>
                <div>
                    <p className="text-white">{join_date}</p>
                </div>
                </div>
                <p className="text-white mt-3 mb-5">{bio}</p>
                <div className="text-white rounded-[10px] flex gap-20 p-5 mt-3 fol_sec">
                    <div>
                        <p>Repos</p>
                        <p className="font-bold">{repos}</p>
                    </div>
                    <div>
                        <p>Followers</p>
                        <p className="font-bold">{followers}</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p className="font-bold">{following}</p>
                    </div>

                </div>

                <div className="flex gap-24 text-white mt-5">
                    <div>
                        <div className="flex items-center gap-2">
                        <CiLocationOn />
                        <p>{location}</p>
                        </div>
                        {/* <div className="flex items-center gap-2"> */}
                        {blogurl ? (<a className="flex items-center gap-2" href={`${blogurl}`}><FaLink /></a>):
                        (<a className="flex items-center gap-2" href="#"><FaLink />Blog Not found</a>)}
                        
                        {/* </div> */}
                        
                    </div>
                    <div>
                        
                        {twitterurl ?  (<a className="flex items-center gap-2" href={`https://x.com/${twitterurl}`}>
                        <CiTwitter />Twitter</a> ) : (<a className="flex items-center gap-2" onClick={(e)=>{
                            e.preventDefault();
                            alert('No twitter account assosiated')
                        }} href='#'>
                            <CiTwitter />Twitter</a>) }               
                        <div className="flex items-center gap-2">
                        <HiOutlineBuildingOffice2 />
                        <p>agithub</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Git_Profile_ByAPI;