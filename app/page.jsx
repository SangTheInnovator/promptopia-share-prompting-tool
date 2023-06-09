import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text_center'>
            Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>
                Powered Prompts
            </span>
        </h1>
        <p className='desc text-center'>
            Promtopia is an open-source prompting
            tool for modern world to discover, 
            and share creative prompts
        </p>

        <Feed/>
    </section>
  )
}

export default Home;