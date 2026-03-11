import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

export function main(){
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000); //Instanciando o objeto Conta

    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    let opcao: number;

    while(true){
        console.log(colors.bg.black, colors.fg.yellow,
        
        "\n*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9){
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com z - O seu futuro começa aqui!\n")
            Sobre();
            console.log(colors.reset);
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por numero\n\n", colors.reset);
                keyPress()
                break;
            case 4: 
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", colors.reset);
                keyPress()
                break;
            case 6: 
                console.log(colors.fg.whitestrong,"\n\nSacar\n\n", colors.reset);
                keyPress()
                break;
            case 7: 
                console.log(colors.fg.whitestrong,"\n\nDepositar\n\n", colors.reset);
                keyPress()
                break;
            case 8: 
                console.log(colors.fg.whitestrong,"\n\nTransferir entre Contas\n\n", colors.reset);
                keyPress()
                break;
            default: 
                console.log(colors.fg.whitestrong,"Opcao invalida!", colors.reset);
                keyPress()
                break;
            }
        }
    }
    
     export function Sobre(): void{
        console.log("\n*****************************************************");
        console.log("Projeto Desenvolvido por: Jhonatan Miranda ");
        console.log("Generation Brasil - jhonatanmiranda221@gmail.com");
        console.log("github.com/JhonatanMiranda221");
        console.log("*****************************************************");
    }

    function keyPress() {
        console.log(colors.reset, "")
        console.log("Pressione Enter para continuar...")
        readlinesync.prompt()
    }
    main();