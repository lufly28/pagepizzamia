<?php
// Datos de conexión a la base de datos (reemplaza con tus datos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "newsletter pizza mia";


// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener el correo electrónico del formulario
$email = $_POST['email'];

// Insertar el correo electrónico en la base de datos
$sql = "INSERT INTO suscriptores (correo) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

// Datos de conexión a la base de datos (reemplaza con tus datos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "newsletter pizza mia";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener el correo electrónico del formulario
$email = $_POST['email'];

// Insertar el correo electrónico en la base de datos
$sql = "INSERT INTO suscriptores (correo_electronico) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo suscriptor agregado";
} else {
    echo "Error: " . $sql . "<br>" . $conn->conn->error;
}

$conn->close();


?>

<?php
// Conectar a la base de datos
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Obtener los datos del formulario enviados por JavaScript
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$address = $_POST['address'];

// Validar los datos y verificar si el usuario existe en la base de datos
// ...

// Si los datos son válidos, crear una sesión y redirigir al usuario
session_start();
$_SESSION['user_id'] = $user_id; // Suponiendo que tienes un ID de usuario en tu base de datos
echo json_encode(['success' => true]);