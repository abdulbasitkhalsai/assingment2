import Image from "next/image";

export default function Home() {
  return (    
    <main className='parentContainer'>
        <div className='childContainer'>
        <p>Hi,</p>
        <p>I'm <span className="profileName">Abdul Basit Khalsai</span></p>
        <p>Professional UI / UX Deisgner</p>
        </div>
    </main>
  );
}
