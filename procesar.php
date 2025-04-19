<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $captcha = $_POST['g-recaptcha-response'];

    if (!$captcha) {
        die("Por favor, verifica que no eres un robot.");
    }

    $secretKey = "6LcWNAgrAAAAAF_DjqhFQzqQ8oxISU3zwVfFBKuu";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);

    if ($responseKeys["success"]) {
        echo "Formulario enviado con éxito.";
        // Aquí procesas los datos del formulario (guardar en BD, enviar email, etc.)
    } else {
        die("Error en la verificación de reCAPTCHA.");
    }
}
?>
