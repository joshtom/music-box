

    const search = () => {
        var input, 
            filter, 
            span, 
            i, 
            txtValue;
    input = document.getElementById("musicInput");
    filter = input.value.toUpperCase();
    section = document.getElementsByTagName("section");
    for (i = 0; i < section.length; i++) {
        span = section[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            section[i].style.display = "";
        } else {
            section[i].style.display = "none";
        }
    }
    }

    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('header');
    //     if(window.scrollY > 30)	header.classList.add('shadow');
    //     else header.classList.remove('shadow');
    // })
