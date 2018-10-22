
import job_controller from '../controllers/home_job_controller';
import resume_controller from '../controllers/resume_controller';
import my_controller from '../controllers/my_controller';
// import city_controller from '../controllers/city_controller';
import jobDetail_controller from '../controllers/home_job_detail_controller';
import login_controller from '../controllers/login_controller';

const routes = {
    '#/login': login_controller,
    '#/home': job_controller,
    '#/resume': resume_controller,
    '#/my': my_controller,
    '#/home/jobDetail': jobDetail_controller,

}

export { routes } ;


