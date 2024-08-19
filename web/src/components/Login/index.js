import logo from '../../assets/img/logo.png';
const Login = () => {
    return(
        <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src={logo} class="img-fluid" alt="Logo"/>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3">Track Wise</p>
                    </div>

                    <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0">Login</p>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example3">Email</label>
                        <input type="email" id="form3Example3" class="form-control form-control-lg" placeholder="Insira um endereço de e-mail válido" />
                        
                    </div>

                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form3Example4">Senha</label>
                        <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Insira a senha" />
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">Lembre de mim</label>
                        </div>
                        <a href="#!" class="text-body">Esqueceu a senha?</a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Login</button>
                    </div>

                    </form>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Login;