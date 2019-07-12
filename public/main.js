new Vue({
    el: '#app',
    data: {
        error:'',
        success:false,
        name: '',
        url: '',
    },
    methods: {
        createKutty() {
            const body = { name: this.name, url: this.url };
            // console.log(this.name,this.url);
            fetch('/api/kutty', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                console.log(res);
                return res.json();
            }).then(result => {
               if(result.isJoi){
                   this.error=result.details.map(detail=>detail.message).join('. ');

                   console.log(this.error);
               }
               else{
                   this.success=true;
               }
            });
        }
    },
});