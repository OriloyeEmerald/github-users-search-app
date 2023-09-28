import React from 'react';
import oval from '../assets/images/Oval.svg'
import pin from '../assets/images/pin.svg'
import url1 from '../assets/images/url.svg'
import twitter1 from '../assets/images/twitter.svg'
import office from '../assets/images/office.svg'
import pin2 from '../assets/images/pin2.svg'
import url2 from '../assets/images/url2.svg'
import twitter2 from '../assets/images/twitter2.svg'
import office2 from '../assets/images/office2.svg'

const Profile = ({toggleState, username, title, date, profileImg, bio, repo, followers, following, location, url, twitter, company, isLoading}) => {
  return (

  <div className='profile mt-6 rounded-[.8rem]' style={{background: !toggleState && '#fefefe'}}>
    { isLoading 
       ? 
    (<div className="animate-pulse mt-2">
    <h2 className="mt-2" style={{color: !toggleState && 'gray'}}>Getting User...</h2>
  </div>) 
       : 
      <><div className='flex gap-[20px] items-center pl-3 py-6 lg:ml-20'>
                  <div className="profile-img rounded-full">
                      <img src={profileImg} alt="profile-img" className='w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] rounded-full' />
                  </div>
                  <div className="profile-details text-left">
                      <div>
                          <h5 className='text-[.9rem] lg:text-xl' style={{ color: !toggleState && '#000' }}>{title}</h5>
                          <h6 className='text-[.8rem]lg:text-xl ' style={{ color: !toggleState && '#0079ff' }}>{username}</h6>
                      </div>
                      <p className='text-[.8rem] font-thin lg:text-xl' style={{ color: !toggleState && '#4b689b' }}>{date}</p>
                  </div>
              </div><p className='text-left lg:text-center pl-3 pt-2 pb-4 text-[.9rem] lg:text-xl' style={{ color: !toggleState && '#4b689b' }}>{bio}</p><div className="flex justify-around lg:justify-even profile-wrapper mx-3 rounded-[.7rem]" style={{ background: !toggleState && '#f6f8ff', color: !toggleState && '#4b689b' }}>
                      <div className='py-5 pl-4'>
                          <h5 className='text-[.8rem] lg:text-xl'>Repos</h5>
                          <p className='text-[.9rem] lg:text-xl'>{repo}</p>
                      </div>
                      <div className='py-5 px-4'>
                          <h5 className='text-[.8rem] lg:text-xl'>Followers</h5>
                          <p className='text-[.9rem] lg:text-xl'>{followers}</p>
                      </div>
                      <div className='py-5 pr-4'>
                          <h5 className='text-[.8rem] lg:text-xl'>Following</h5>
                          <p className='text-[.9rem]lg:text-xl'>{following}</p>
                      </div>
                  </div><br />
                  <div className='pl-3 mb-3 lg:flex lg:flex-wrap sm:flex sm:flex-wrap' style={{ color: !toggleState && '#4b689b' }}>
                      <div className='flex gap-[15px] py-2 lg:w-1/2 sm:w-1/2'>
                          <img src={toggleState ? pin : pin2} alt="location" className='lg:w-4' />
                          <p className='text-[.8rem] lg:text-xl'>{location ? location : 'Location Unavailable!'}</p>
                      </div>
                      <div className='flex gap-[15px] py-2 lg:w-1/2 sm:w-1/2 '>
                          <img src={toggleState ? url1 : url2} alt="link" className='lg:w-4'/>
                          <p className='text-[.8rem] lg:text-xl'>{url}</p>
                      </div>
                      <div className='flex gap-[15px] py-2 lg:w-1/2 sm:w-1/2 '>
                          <img src={toggleState ? twitter1 : twitter2} alt="twitter" className='lg:w-4'/>
                          <p className='text-[.8rem] lg:text-xl'>{twitter ? twitter : 'Not Available'}</p>
                      </div>
                      <div className='flex gap-[15px] py-2 lg:w-1/2 sm:w-1/2 '>
                          <img src={toggleState ? office : office2} alt="company" className='lg:w-4'/>
                          <p className='text-[.8rem] lg:text-xl'>{'@' + company}</p>
                      </div>
                  </div></> 
      }
     <br />
    </div> 
  );
}

export default Profile;
