import React  from 'react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react'

function Contact() {
    
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_i6tcq5n', 'template_wddz79n', form.current, 'Do1vIelv9gzgnw0qw')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    
    }
  return (
    <section className="section text-center" name = "contact" >
        <div className= 'container mx-auto ' >

            <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-6 gap-x-8 text-center lg:tex-left' >
                    {/* bg */}
                <div className='hidden lg:flex bg-red absolute bottom-0 left-0 right-0 top-72 -z-10'>bg</div>
                    {/* text and form */}
               
                    
                      <div className='lg:flex-1 lg:pt-32 px-4'>
                      <h1 className="title text-2xl lg:text-4xl">Contact Us</h1>
                      <p className='text-base lg:text-lg '>Start your building journey</p>
                      
                            <form ref= {form} onSubmit = {sendEmail} className='flex flex-col gap-y-4'>
                           <div className='flex gap-x-10'>
                           <input name='from_name' type="text"  placeholder='Your name' className='outline-none border-b border-b-primary h-[60%] bg-transparent font-semibold w-full pl-3 ' />
                           
                           
                            <input name='from_email' type="text"  placeholder='Your email..' className='outline-none border-b border-b-primary h-[60%] bg-transparent font-semibold w-full pl-3 ' />
                            </div>
                           
                            <textarea name = 'message' placeholder='Leave a message here...' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                            <button type="submit" className='flex cursor-pointer hover:scale-110 items-center font-medium transition-all rounded-lg border-sol  bg-[#c1121f] text-white py-2 px-6 mx-auto'>lets talk</button>


                            
                            </form>
                        </div>
                
        
                    </div>
                    {/* image */}
                    <div className='lg:flex-1'>image</div>
                
        
         </div>
    </section>
   
  )
}



export default Contact
