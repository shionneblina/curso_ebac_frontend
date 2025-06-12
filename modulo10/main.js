        $(document).ready(function(){
            $('#carousel-imagens').slick({
                autoplay:true
            });

            $('.menu-hamburger').click(function() {
                $('nav').slideToggle();
            })

            $('#telefone').mask('(00) 00000-0000')

            $('form').validate({
                rules: {
                    nome: { 
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                        telefone: {
                        required: true
                    },
                    mensagem: {
                        required: true
                    },
                    veiculoInteresse: {
                        required: false,
                    }
                },
                messages: {
                    nome: 'por favor, insira seu nome'
                },
                submitHandler: function(form) {
                    console.log(form)
                },
                invalidHandler: function(evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }
            })

            $('.lista-veiculos').click(function() {
                const destino = $('#contato');
                const nomeVeiculo = $(this).parent().find('h3').text();

                $('#veiculoInteresse').val(nomeVeiculo);

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000)
            })
        })