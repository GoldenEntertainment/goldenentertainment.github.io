const p = document.querySelector('p')
        
        setTimeout(() => {
            p.textContent = "Hi! I'm TJ, and this is my personal homepage." + " - Welcome!"

        }, 3000)

localStorage.setItem('visited', 'true');

if (!localStorage.getItem('visited')) {
    p.textContent = "It's a secret to everybody. if you see this, know that i like pizza and wings!";
}
