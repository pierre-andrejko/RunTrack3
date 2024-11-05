<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc-en-ciel</title>
    <style>
        #rainbowContainer {
            display: flex;
            margin-bottom: 20px;
        }
        #rainbowContainer img {
            cursor: pointer;
        }
        #resultMessage {
            font-weight: bold;
        }
        .success {
            color: green;
        }
        .failure {
            color: red;
        }
    </style>
</head>
<body>
    <button id="shuffleButton">Mélanger les images</button>
    <div id="rainbowContainer">
    </div>
    <p id="resultMessage"></p>

    <script src="script.js"></script>
</body>
</html>
