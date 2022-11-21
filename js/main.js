`use strict`;

const { createApp } = Vue

    createApp({
        data() {
            return {
                contacts: [
                    {
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: '_2',
                        visible: true,
                        messages: [
                            {
                                date: '10/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '10/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '10/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: '_3',
                        visible: true,
                        messages: [
                            {
                                date: '10/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '10/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '10/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: '_4',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: '_5',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: '_6',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: '_7',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: '_8',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: '_7',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                ], 
                active: 0,
                newMessage:'',
                searchName: '',
                newUser:'',
                chuck:[],
                newDate: new Date(),
                dropDownChat: false,
                dropDownMessage: false,
                emoji:['😊','💕','😒','🤣'],
            }
        },
        methods:{
            // genera un numero randomico
            getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            },
            // metodi per attivare e disattivare i dropdown
            showDropChat(){
                this.dropDownChat = !this.dropDownChat;
            },
            showDropMessage(index){
                document.getElementById(index).classList.toggle(`d-block`)
            },
            // metodo che mi permette di  modificare una variabile
            userSelector(index){
                this.active = index;
            },
            // metodo per controllore se il messaggio e' inviato o ricevuto  e 
            // di conseguenza la risposta automatica dell'algoritmo dopo un secondo
            insertMessage(){     
                let newObject = {
                    date: this.newDate,
                    message: this.newMessage,
                    status: 'sent', 
                };
                let response = {
                        date:this.newDate,
                        message: this.chuck[this.getRndInteger(0, this.chuck.length - 1)],
                        status:'received,'
                };
                this.contacts[this.active].messages.push(newObject);
                setTimeout(() => {
                    this.contacts[this.active].messages.push(response);
                }, 1000),       
                this.newMessage = '';
            },
            // rimozione messaggio dalla lista
            removeMessage(index){
                this.contacts[this.active].messages.splice(index,1)
            },
            //  metodo che utlizzando un ciclo v-for e un v-show nel HTML permette di controllare se il nome inserito e' 
            // presente nella lista e in caso di riscontro, nascondere gli oggetti non desiderati
            filterList(contact) {
                if(this.searchName == ``){
                    return true;
                }
                return contact.name.toLowerCase().
                startsWith(this.searchName.toLowerCase());
              },
            //  metodo per selezionare l'ultimo messaggio presente in ogni oggetto.
              lastMessage(contact){
                return contact.messages[contact.messages.length - 1]
              },
            //   metodo per formattare la data
            formatMessageData(data){
                return moment(data).fromNow();
            },
            // funzione per la creazione di un nuovo oggetto utente con i rispettivi dati e dei messaggi di presentazione 
            newName(){
                console.log(this.newUser)
                let newUtent = {
                    name: this.newUser,
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: this.newDate,
                            message: 'I messaggi inviati verranno visualizzati in questo modo',
                            status: 'sent'
                        },
                        {
                            date: this.newDate,
                            message: 'Io invece sono un messaggio ricevuto',
                            status: 'received'
                        },
                        {
                            date: this.newDate,
                            message: 'Buona chat!!!!',
                            status: 'sent'
                        }
                    ],
                };
                this.contacts.push(newUtent)
                this.newUser = ''
            },
            scrollBottom(){
                let chat = document.querySelector('.chat-message')
                chat.scrollTop = chat.scrollHeight
            }
        },
        
        updated(){
            this.scrollBottom();
        },
        // permette a Chuck Norris di assumere il controllo della messaggistica tramite API
        created() {
            // Formatto l'ora nel formato italiano
            moment.locale('it');
            // Uso axios per slavare 20 risposte diverse di Chuck in un array
            for ( let i = 0; i <= 20; i++ ){
                axios.get('https://api.chucknorris.io/jokes/random')
                .then((response) => {             
                this.chuck.push(response.data.value);
                })
            }
        }
    }).mount('#app');




    