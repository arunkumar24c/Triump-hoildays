import React from 'react'

const faqData = [
    {
        question : "What are the best tour packages of Singapore?",
        answer: "For travelling to Singapore, it is necessary that you have a visa when you are planning for the vacation. Only for those who hold a diplomatic or official passport issued by the government of India, a visa is not necessary for going to Singapore. One can apply for a Singapore tourist visa that allows a stay for a maximum period of 30 days."
    },
    {
        question : "What are the best tour packages of Singapore?",
        answer: "For travelling to Singapore, it is necessary that you have a visa when you are planning for the vacation. Only for those who hold a diplomatic or official passport issued by the government of India, a visa is not necessary for going to Singapore. One can apply for a Singapore tourist visa that allows a stay for a maximum period of 30 days."
    },
    {
        question : "What are the best tour packages of Singapore?",
        answer: "For travelling to Singapore, it is necessary that you have a visa when you are planning for the vacation. Only for those who hold a diplomatic or official passport issued by the government of India, a visa is not necessary for going to Singapore. One can apply for a Singapore tourist visa that allows a stay for a maximum period of 30 days."
    },
]

const Faq = () => {
  return (
    <>
     <section className='bg-white py-10'>
        <div className='flex items-center gap-5'>
     <p className='border-2 border-orange-600 h-10'></p>
     <p className='text-lg md:text-xl font-bold'>People Also Ask About Singapore Tours</p>
     </div>
          {
            faqData.map((values, index)=>{
                return  <FaqItem {...values} no={index} />
            })
          }
        
     </section>
    
    </>
  )
}

export default Faq


const FaqItem = (props) =>{
    const {question, answer, no } = props
   
    return(
        <>

        <div className='p-10'>
            <div className='flex items-center gap-5'>
           <p className='border-2 border-orange-600 rounded-full w-20 h-20 text-center pt-5 text-3xl text-orange-500 font-semibold'>{no + 1}</p>
           <p>{question}</p>
           </div>
           <p className='mt-8'>{answer}</p>
        </div>
        </>
    )
}