    let articleVisible = false;

    function showhide() {
        let article = document.getElementById("article");

        if (articleVisible) {
            if (article) {
                article.remove()
            }
            articleVisible = false
        } else {
            if (!article) {
                let newArticle = document.createElement("article")
                newArticle.id = "article"
                newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage."
                document.body.appendChild(newArticle)
            }
            articleVisible = true
        }
    }

    document.getElementById("button").addEventListener("click", showhide)
