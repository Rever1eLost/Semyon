document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    const forms= document.querySelectorAll('.needs-validation');

    forms.forEach(from=>{
        form/addEventListener("submit", event =>{
            const phone = document.getElementById("validationServerPhone");
            const email = document.getElementById("validationServerEmail");
            const startDate = document.getElementById("validationServerSartDate");
            const days = document.getElementById("validationServerDays");

            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);

            
        })
    })
});