import login_template from '../views/login.html';

const render = () => {
    $('.home-container').html(login_template);


}

export default {
    render
}