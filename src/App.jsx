import './App.css'
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { PiTargetBold } from "react-icons/pi";
import { GoCheckCircleFill } from "react-icons/go";
import { LuSiren } from "react-icons/lu";


function App() {

  return (
  < >
    {/* Horizontal side bar */}
    <div className='Container'>
        <div className='sidebar'>
          <div className='Logo'>
            <div>
              <p className='logoPic'></p>
            </div>

            <div className='logo-menu'>
              <FaEllipsisVertical style={{
                color:"white",
                marginTop:12,
              }} />
            </div>
          </div>

          <div className='menu-listContainer'>
            <div className='menu-list'><AiFillHome /> Workbench</div>
            <div className='menu-list'><IoFilterSharp /> Filters</div>
            <div className='menu-list'><MdManageAccounts /> management</div>
            <div className='menu-list'><IoMdUnlock /> Unlock</div>
            <div className='menu-list'><FaMapMarkerAlt /> Map</div>
            <div className='menu-list'><FaSearchLocation /> Search</div>
          </div>
          <div className='pic'></div>
        </div>

        <div className='secground'>
          <div className='profile'>
            <input className='search' type="text" placeholder= "  Search..."/>
            <div className='prof'>
              <LuSettings className='settings' style={{
                marginLeft:10,
              }}/>
              <div>
                <div className='picture'></div>
                <div className='outerlayer'>
                  <div className='innerlayer'>
                    <div className='menu'><LuMenu style={{
                      color:"grey",
                    }}/></div>
                  </div>
            </div>
                </div>
            </div>
          </div>

            <div className='bio'>
              <p className='Greet'>Hello! Leon</p>
              <p>Never put off tomorrow what can be done today!</p>
            </div>

          <div className='thirth-component'>
          <p>Today</p>
          <p className='assign'>automatically assigned</p>
          </div>

          <div className='Activities'>
            <div className='first-activity'>
              <div className='spacing'>
                <div className='text'>
                  <p className='num1'>480</p>
                  <p className='changeColour'>Go on</p>
                </div>
                <div className='percentages'>
                  <p className='from'>From <span className='changeColour'>100%</span></p>
                  <input type="range" min="1" max="100" defaultValue="70"></input>
                </div>
            </div>
          </div>

            <div className='sec-activity'>
              <div className='spacing'>
                <div className='text'>
                  <p className='num'>180</p>
                  <p>Intention</p>
                </div>
                <div className='percentages'>
                  <p className='from'>From <span style={{color:"black"}}>60%</span></p> 
                  <input type="range" min="1" max="100" defaultValue="70"></input>
                </div>
              </div>
            </div>

            <div className='thirth-activity'>
              <div className='spacing'>
                <div className='text'>
                  <p className='num'>72</p>
                  <p>Goal </p>
                </div>
                <div className='percentages'>
                  <p className='from'>From  <span style={{color:"black"}}>48%</span></p>
                  <input type="range" min="1" max="100" defaultValue="70"></input>
                </div>
              </div>
            </div>

            <div className='forth-activity'>
              <div className='spacing'>
                <div className='text'>
                  <p className='num'>72</p>
                  <p>NO INTROSION</p>
                </div>
                <div className='bingo'>
                <p><PiTargetBold style={{
                  width:50,
                  height:50,
                  color:"white",
                }}/></p>
                </div>
              </div>
            </div>

            <div className='fifth-activity'>
              <div className='block'>
                <div className='text'>
                  <p className='num1'>800 <GoCheckCircleFill className='icon' style={{
                width:15,
                height:15,
                }}/></p>
                  <p className='changeColour'>Destribution</p>
                </div>
                <div className='iconalign'>
                  <div className='percentages2'>
                    <p className='from'>From <span className='changeColour'>100%</span></p>
                    <input type="range" min="1" max="100" defaultValue="70"></input>
                  </div>
                  <p className='metaai'></p>
                </div>
              </div>
              <div>
                <p className='speechbubble'>
                <p className='speech'><GoCheckCircleFill className='icon' style={{
                  marginLeft:40,
                }}/><br />Work has been completed!</p>
                  <p className='arrow'></p>
                </p>
              </div>
            </div>

          </div>
          
          {/* Forth Component */}
          <div className='forth-component'>
            <p>Mockup</p>
            <p className='nam'>Company</p>
            <div className='outershell'>
              <div><LuSiren style={{
                position:"relative",
                width:20,
                height:20,
                marginLeft:10,
                marginTop:9,
              }}/></div>
            </div>
          </div>

          <div className='last-component'>
            <div className='infospace'>
              <div className='info'>
                <div className='backgnd'>
                 <p className='airplane'></p> 
                </div>
                <div className='plane'>
                  <p className='topicbus'>AIR PLANE</p>
                  <p className='explaination'>Plane took</p>
                </div>
                <FaEllipsisVertical className='plane-ellip1'/>
              </div><br />
              <div className='info'>
                <div className='backgnd'>
                  <p className='phone'></p>
                </div>
                <div className='plane'>
                  <p className='topicbus'>TELEPHONE</p>
                  <p className='explaination'>Telephone took</p>
                </div>
                <FaEllipsisVertical className='plane-ellip2'/>
              </div><br />
              <div className='info'>
                <div className='backgnd'>
                  <p className='bus'></p>
                </div>
                <div className='plane'>
                  <p className='topicbus'>BUS</p>
                  <p className='explaination'>Bus took</p>
                </div>
                <FaEllipsisVertical className='plane-ellip3'/>
              </div>
            </div>

            <div className='company'>
              <div className='destribtion'>
                <p className='topic'>FMOUNTAIN COMPANY</p>
                <p>Leading big data solution provider in China, aiming to use big data and artificial intelligence</p>
                <button className='btn'><span className='mdi--unlocked'></span>
                  UNLOCK
                  </button>
              </div>
              <div className='building'></div>
            </div>
          </div>
        </div>
    </div>
  </>
)}

export default App
