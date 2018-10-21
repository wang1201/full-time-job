
import job_controller from '../controllers/job_controller';
import search_controller from '../controllers/search_controller';
import profile_controller from '../controllers/profile_controller';
// import city_controller from '../controllers/city_controller';
import jobDetail_controller from '../controllers/job_detail_controller';

const routes = {
    '#/home': job_controller,
    '#/search': search_controller,
    '#/profile': profile_controller,
    '#/home/jobDetail': jobDetail_controller,

}

export { routes } ;


