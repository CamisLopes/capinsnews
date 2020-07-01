const API_KEY = '0c8dd9913b6b485d921e1e9603db3e5e'

Bloco_Onload: {
    onload = () => {
        requestData();
    }
}

function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/sources?country=br&q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

let query = document.getElementById('btnPEsquisa').addEventListener ('click', executaPesquisa);


Funções: {
    function dateFormat(date) {
        let ano = date.slice(0, 4);
        let mes = date.slice(5, 7);
        let dia = date.slice(8, 10);
        return `${dia}/${mes}/${ano}`;
    }

    
    function requestData() {
        console.log("RequestData ---")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let xhr = new XMLHttpRequest;
        xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=br&apiKey=${Key}`)
        xhr.send();
        xhr.onload = showData;
    }

    function showData() {
    console.log("ShowData ---")
        let noticia = JSON.parse(this.responseText).articles;

        
        let div = document.getElementsByClassName("carousel-item");
        for(i = 0; i < div.length; i++){
            let texto = "";
            texto = `
            <div class="card border-0 rounded-0 text-light overflow zoom">
                <div class="position-relative">
                    <!--thumbnail img-->
                    <div class="ratio_left-cover-1 image-wrapper">
                        <a href="${noticia[i].url}">
                            <img class="img-fluid w-100"
                                src="${noticia[i].urlToImage}"
                                alt="">
                        </a>
                    </div>
                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                        <!--title-->
                        <a href="${noticia[i].url}">
                            <h2 class="h3 post-title text-white my-1">${noticia[i].title}</h2>
                        </a>
                        <!-- meta title -->
                        <div class="news-meta">
                            <span class="news-author">by <a class="text-white font-weight-bold" href="${noticia[i].author}">${noticia[i].author}</a></span>
                            <span class="news-date">${noticia[i].publishedAt}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;
            div[i].innerHTML = texto;
        
        }

        
        let div1 = document.getElementsByClassName("destaque-carrosel-1");
        let texto1 = "";
        texto1 = `
        <div class="card border-0 rounded-0 text-white overflow zoom">
            <div class="position-relative">
                <!--thumbnail img-->
                <div class="ratio_right-cover-2 image-wrapper">
                    <a href="${noticia[i].url}">
                        <img class="img-fluid"
                            src="${noticia[i].urlToImage}"
                            alt="${noticia[i].name}">
                    </a>
                </div>
                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                    <!-- category -->
                    <a class="p-1 badge badge-primary rounded-0" href="${noticia[i].category}">Lifestyle</a>

                    <!--title-->
                    <a href="${noticia[i].title}">
                        <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                    </a>
                </div>
            </div>
        </div>
        `;
        div1[i].innerHTML = texto1; 
        
        let div2 = document.getElementsByClassName("destaque-carrosel-2");
        let texto2 = "";
        texto2 = `
        <div class="card border-0 rounded-0 text-white overflow zoom">
            <div class="position-relative">
                <!--thumbnail img-->
                <div class="ratio_right-cover-2 image-wrapper">
                    <a href="${noticia[i].url}">
                        <img class="img-fluid"
                            src="${noticia[i].urlToImage}"
                            alt="${noticia[i].name}">
                    </a>
                </div>
                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                    <!-- category -->
                    <a class="p-1 badge badge-primary rounded-0" href="${noticia[i].category}">Lifestyle</a>

                    <!--title-->
                    <a href="${noticia[i].title}">
                        <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                    </a>
                </div>
            </div>
        </div>
        `;
        div2[i].innerHTML = texto2; 

        let div3 = document.getElementsByClassName("destaque-carrosel-3");
        let texto3 = "";
        texto3 = `
        <div class="card border-0 rounded-0 text-white overflow zoom">
            <div class="position-relative">
                <!--thumbnail img-->
                <div class="ratio_right-cover-2 image-wrapper">
                    <a href="${noticia[i].url}">
                        <img class="img-fluid"
                            src="${noticia[i].urlToImage}"
                            alt="${noticia[i].name}">
                    </a>
                </div>
                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                    <!-- category -->
                    <a class="p-1 badge badge-primary rounded-0" href="${noticia[i].category}">Lifestyle</a>

                    <!--title-->
                    <a href="${noticia[i].title}">
                        <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                    </a>
                </div>
            </div>
        </div>
        `;
        div3[i].innerHTML = texto3; 

        let div4 = document.getElementsByClassName("destaque-carrosel-4");
        let texto4 = "";
        texto4 = `
        <div class="card border-0 rounded-0 text-white overflow zoom">
            <div class="position-relative">
                <!--thumbnail img-->
                <div class="ratio_right-cover-2 image-wrapper">
                    <a href="${noticia[i].url}">
                        <img class="img-fluid"
                            src="${noticia[i].urlToImage}"
                            alt="${noticia[i].name}">
                    </a>
                </div>
                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                    <!-- category -->
                    <a class="p-1 badge badge-primary rounded-0" href="${noticia[i].category}">Lifestyle</a>

                    <!--title-->
                    <a href="${noticia[i].title}">
                        <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                    </a>
                </div>
            </div>
        </div>
        `;
        div4[i].innerHTML = texto4; 



    let divTela = document.getElementById('destaque-Esquerda-2');
    let texto5 = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto5 = texto5 + `
        <div class="card mb-3" style="max-width: 665px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="img_organized/spiralgalaxy.jpg" class="card-img" alt="a">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Título da notícia</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>        
        `;
    }
    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto5;



        let divTela1 = document.getElementById('noticia_Esquerda_4');
        let texto6 = '';

        // Montar texto HTML das noticias
        let dados1 = JSON.parse (this.responseText);
        for (i=0; i< dados.articles.length; i++) {
            let noticia = dados.articles[i];
            let data = new Date (noticia.publishedAt);

            texto6 = texto6 + `
            <div class="d-flex">
                <div class="pl-2 pr-3">
                    <div class="card mb-3">
                        <div class="card">
                            <img src="img_organized/helixnebula.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Música</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pl-3 pr-2">
                    <div class="card mb-3">
                        <div class="card">
                            <img src="img_organized/helixnebula.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Música</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
            `;
            
        }
        // Preencher a DIV com o texto HTML
        divTela1.innerHTML = texto6;


        let divTela2 = document.getElementById('artistas');
        let texto7 = '';

        // Montar texto HTML das noticias
        let dados2 = JSON.parse (this.responseText);
        for (i=0; i< dados.articles.length; i++) {
            let noticia = dados.articles[i];
            let data = new Date (noticia.publishedAt);

            texto7 = texto7 + `
            <li class="media" style="max-width: 475px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="img_organized/serpentsnebula.jpg" class="card-img" alt="a">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Título da notícia</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </li>     
            `;
            
        }
        // Preencher a DIV com o texto HTML
        divTela2.innerHTML = texto7;
    

        let divTela3 = document.getElementById('artistas');
        let texto8 = '';

        // Montar texto HTML das noticias
        let dados3 = JSON.parse (this.responseText);
        for (i=0; i< dados.articles.length; i++) {
            let noticia = dados.articles[i];
            let data = new Date (noticia.publishedAt);

            texto8 = texto8 + `
            <div class="col mb-4">
                <div class="card w-100 h-100">
                <img src="img_organized/logo.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Música</h5>
                    <p class="card-text">cantor</p>
                </div>
                </div>
            </div>  
            `;
            
        }
        // Preencher a DIV com o texto HTML
        divTela3.innerHTML = texto8;


        let divTela4 = document.getElementById('fontesartistas');
        let texto9 = '';

        // Montar texto HTML das noticias
        let dados4 = JSON.parse (this.responseText);
        for (i=0; i< dados.articles.length; i++) {
            let noticia = dados.articles[i];
            let data = new Date (noticia.publishedAt);

            texto9 = texto9 + `
            <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                <img src="img_organized/cosmicreef.jpg" alt="a">
            </div> 
            `;
        }
        // Preencher a DIV com o texto HTML
        divTela4.innerHTML = texto9;

    }
}

