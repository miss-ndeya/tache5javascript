/*
// Écrire un programme qui permet à un utilisateur de voir quelques types de Boucle
const Boucles = prompt('Les types de boucle \n1: Boucle for\n2. Boucle while\n3. Boucle do while');
switch (Boucles) {
    case "1" : 
    alert(`Definition: la boucle For est utilisée où nous avons déjà une idée sur le nombre de fois que la boucle doit être exécuté.
            
           Utilisation: for ([initialisation]; [condition]; [expression-finale]) {
                                instruction
                            }
                            
            Exemple: for (let i = 0; i < 3; i += 1){
                        console.log('Boucle : ' + i)
                    }
        `)
    break;
    case "2" : 
    alert(`Definition: La boucle while va nous permettre de répéter une série d’instructions tant qu’une condition donnée est vraie c’est-à-dire tant que la condition de sortie n’est pas vérifiée.
            
           Utilisation: while (condition) 
                            instruction
            Exemple: let i = 0;

                     while (i < 3) {
                        i++;
                    }
            
                    console.log(i);
                           
        `)
    break;
    case "3" : 
    alert(`Definition: L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée.
            
           Utilisation: do
                        instruction
                        while (condition);
            Exemple: let result = '';
                    let i = 0;
            
                    do {
                        i = i + 1;
                        result = result + i;
                    } while (i < 5);
            
                    console.log(result);

        `)
    break;
}
*/

let n = prompt('Vous voulez la multiplication avec quel nombre')

if (n > 0) {
    for (let i = 1; i < 10; i++) {
            document.write(`<p>${i}*${n} = ${i*n}</p>` )
    }
}else{
    document.write("saisi une nouvelle valeur")
}




            