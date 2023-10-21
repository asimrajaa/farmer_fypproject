import React from 'react';
import { Outteam } from '../../components';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ABOUT US</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">A Software Engineer tasked with developing a website for farmers to buy and sell their products plays a crucial role in bridging the gap between technology and agriculture. This professional designs and builds a user-friendly platform where farmers can list their products, interact with potential buyers, and manage their sales. They focus on creating robust features like product listings, secure payment gateways, and communication tools to facilitate easy transactions. Furthermore, they ensure the website is accessible on various devices, providing farmers with a seamless online marketplace experience. This role requires a deep understanding of both web development and the agricultural industry to provide a valuable digital solution to farmers looking to expand their reach and improve their livelihoods.</p>
        </div>

      </div>

      <Outteam />
    </section>
  )
}

export default About