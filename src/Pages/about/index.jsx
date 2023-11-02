import  Link  from "next/link";;

const About = () => {
  return (
    <div className="font-paragraph">
      <div className="breadcrumbs  mb-5 text-sm font-normal">
        <ul>
          <li>
            <Link href='/' className='text-[#081120] font-paragraph text-sm'>Home</Link>
          </li>
          <li className='text-[#6C737F] font-paragraph text-sm'>About Us</li>
        </ul>
      </div>
      <div>
        <div className="card mb-16  md:mb-24 pp  rounded-xl" style={{ border: "1px solid #E5E7EB" }}>
          <div className="card-body">
            <h1 className="font-title text-3xl md:text-5xl font-bold mb-6 md:mb-10">About us</h1>
            <h2 className="text-xl font-medium md:mb-4 mb-2">About us:</h2>
            <p className="text-base font-normal mb-7">ToolsFinder is a collective of entrepreneurs with global perspectives who believe in AI for good. We believe in a future where AI enhances every professional's toolkit. Our team delves deep into tools, plugins and apps to deliver high quality content with transformative potential right to your screens. Tailored for the proactive modern professional, we provide comprehensive resources that illuminate the path to AI integration in the workplace. Create a free account and elevate your professional journey with ToolsFinder.</p>
            <h2 className="text-xl font-medium mb-4">Our mission:</h2>
            <p className="text-base font-normal mb-7">We strive to become the best resource for proactive professionals who want to discover, understand and adopt AI for work.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
