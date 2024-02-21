import banner1 from '../assets/car-banner1.jpg'

const Heroo = () => {
    return (
        <div className='mb-6'>
             <h2 className='text-center text-4xl font-bold mt-8'>Car details</h2>
             <div className="hero  ">
           
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default Heroo;