
import job_controller from '../controllers/home_job_controller';
import search_controller from '../controllers/search_controller';
import profile_controller from '../controllers/profile_controller';
// import city_controller from '../controllers/city_controller';
import jobDetail_controller from '../controllers/home_job_detail_controller';
import login_controller from '../controllers/login_controller';

const routes = {
    '#/login': login_controller,
    '#/home': job_controller,
    '#/search': search_controller,
    '#/profile': profile_controller,
    '#/home/jobDetail': jobDetail_controller,

}

export { routes } ;


