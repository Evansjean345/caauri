import React from 'react'
import '../App.css'

export default function SectionAmime() {
  return (
    <div>
                    <iframe
                      id="iframe-trailer"
                      className="w-full"
                      height="500"
                      src="https://www.dailymotion.com/embed/video/x33a1ra"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
                      allowfullscreen="true"

                    ></iframe>

                    {/*partie 2 */}
                    <div className='w-full mt-6 flex flex-wrap bg-white relative'>
                        <div className='w-[60%] bg-red-300 '>
                            <div className='flex flex-col py-4 px-12'>
                                <strong className='font-thin text-4xl'>
                                    CAAURI CONSULTING
                                </strong>
                                <strong className='font-extralight mt-2 mb-4' >AGENCE DE PUBLICITE DIGITALE</strong>
                                <p className='font-thin'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis rerum vero recusandae, facilis unde? Excepturi vitae eos, officia numquam nesciunt voluptatum. Accusamus soluta unde cumque, dignissimos quae repellendus recusandae.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo exercitationem, officiis vero voluptate delectus, ab quibusdam iusto natus veritatis repellendus aut iste minima dolores sit earum beatae laborum soluta!
                                    <br />
                                    <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis blanditiis dicta reiciendis? In necessitatibus explicabo ea natus totam esse perspiciatis minima laboriosam, dolore dolorem eius exercitationem excepturi veniam aperiam? Laudantium!
                                </p>
                                 <strong className='w-full flex items-center justify-center font-thin my-4'>
                                    VOUS FOURNIR 100% DE SATISFACTION
                                 </strong>
                                 <p className='font-light'>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque esse asperiores voluptatum quasi tenetur molestias eos saepe reiciendis, culpa atque labore magnam accusantium neque iusto vero aliquid nam aspernatur.
                                 </p>
                                 <ul className='mt-4 font-thin list-disc'>
                                    <li>Lorem ipsum dolor, sit amet </li>
                                    <li>Lorem ipsum dolor, sit amet </li>
                                    <li>Lorem ipsum dolor, sit amet </li>
                                    <li>Lorem ipsum dolor, sit amet </li>
                                 </ul>
                                 {/* nos services */}
                                 <strong className='w-full mt-28 font-thin text-2xl flex items-center justify-center'>NOS SERVICES</strong>
                                 <img 
                               data-aos="zoom-out-right"
                               data-aos-easing="ease-in-sine"
                               data-aos-duration="500"
                               data-aos-offset="500"
                                 src="/images/mac_img.png" alt="" className='bg-white h-full w-full animate-bounce transition duration-700 ease-in-out' />
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className='bg-blue-500 flex w-full justify-end text-end items-end leading-none px-16'>2019 <br />
                             creation de caauri consulting</div>
                                {/*roll up */}
                             <div>
                                  <img src="/images/roll-up.png" alt=""  />
                             </div>
                             <br />
                             <div className='bg-blue-500 flex w-full justify-end text-end items-end leading-none px-16'>2019 <br />
                             creation de caauri consulting</div>
                             {/* div absolute */}
                             <div className='absolute bg-black top-[85%] z-50 w-full h-[300px]'>
                                div 1
                             </div>
                        </div>
                        <div className='w-[2%] flex flex-col items-center z-50  pt-20'>
                           <img src="/icon/circle.svg" alt="" />
                            <div className='bg-[#424445] border border-[#424445] h-[335px]'></div>
                            <img src="/icon/circle.svg" alt="" />
                            <div className='bg-[#424445] border border-[#424445] h-[705px] rotate-[-4.5deg]  ml-14'></div>
                            <img src="/icon/circle.svg" alt="" className='ml-28 z-50' />
                            <div className='bg-[#424445] border border-[#424445] h-[535px] rotate-[11.5deg]'></div>
                            <img src="/icon/circle.svg" alt="" className='mr-28 z-50' />
                            <div className='bg-[#424445] border border-[#424445] h-[735px] rotate-[-8.5deg]'></div>
                            <img src="/icon/circle.svg" alt="" className='ml-28 z-50' />
                            <div className='bg-[#424445] border border-[#424445] h-[235px] rotate-[25.5deg]'></div>
                            <img src="/icon/circle.svg" alt="" className='mr-28  z-50' />
                             <div className='bg-[#424445] border border-[#424445] h-[1035px] mr-[310px] rotate-[10.5deg]'></div>
                            <img src="/icon/circle.svg" alt="" className='z-50 mr-[505px]' />
                        </div>
                        <div className='w-[38%] flex flex-col'>
                            <div className='bg-red-500 h-[97px] flex items-end leading-none px-4'>1990 <br /> creation d'internet
                            </div>
                            <div className='bg-blue-500 flex h-[365px] items-end leading-none px-4'>2019 <br />
                             creation de caauri consulting</div>
                            <div className='bg-green-500 flex-col flex h-[700px]  items-center justify-end'>
                                <div className='flex h-[1/2] w-full  justify-end'>
                                <img src="/icon/logo_none.png" alt="" />
                                </div>
                                <div className='h-1/2 text-end z-30 flex flex-end w-full bg-blue-200 items-end sm:mr-96'>
                                    2019 <br />
                                    creation de caauri consulting
                                </div>
                            </div>
                            <div className='bg-gray-500 flex-col flex h-[550px]  items-center justify-end'>
                              <img src="/images/outdoor.png" alt="" />
                            </div>
                            <div className='bg-red-500 h-[750px] flex items-end leading-none px-12'>1990 <br /> creation d'internet
                            </div>
                        </div>
                    </div>
    </div>
  )
}
