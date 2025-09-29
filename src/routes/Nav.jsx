import { Routes, Route } from 'react-router-dom';
import Course from '../page/Course';
import iletsCourse from '../assets/iletsCourse.json';
import Hero from '../component/Hero';
import Features from '../component/Features';
import Testimonials from '../component/Testimonials'; 

const Nav = () => {
  return (
    <div>
        <Routes>
          <Route
					path='/'
					element={
						<>
							<Hero />
							<Features />
							<Testimonials />
						</>
					}
				/>
          <Route path='/courses' element={<Course course={iletsCourse} />} />
        </Routes>
    </div>
  )
}

export default Nav
