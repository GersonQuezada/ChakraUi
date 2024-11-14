<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArchivoController extends Controller
{
    public function procesarArchivo(Request $request)
    {
        $request->validate([
            'archivo' => 'required|file|mimes:ing|max:2048', // Ajusta según tus necesidades
        ]);

        if ($request->hasFile('archivo')) {
            $path = $request->file('archivo')->store('archivos');
            $contenido = Storage::get($path);

            // Procesar la información (ejemplo: convertir a mayúsculas)
            $contenidoProcesado = strtoupper($contenido);

            // Generar un nuevo archivo TXT
            $nuevoPath = 'archivos/nuevo_archivo.txt';
            Storage::put($nuevoPath, $contenidoProcesado);

            return response()->json(['mensaje' => 'Archivo procesado y guardado con éxito.']);
        }

        return response()->json(['error' => 'No se ha subido ningún archivo.'], 400);
    }
}
        // // Procesar el contenido, ejemplo: obtener pares clave-valor
        // $lineas = explode(PHP_EOL, $contenido);
        // $datos = [];

        // foreach ($lineas as $linea) {
        //     if (trim($linea) === '') continue;

        //     list($clave, $valor) = explode('=', $linea, 2);
        //     $datos[trim($clave)] = trim($valor);
        // }

        // // Crear el contenido para el nuevo archivo
        // $contenidoNuevoArchivo = "Datos procesados:\n";
        // foreach ($datos as $clave => $valor) {
        //     $contenidoNuevoArchivo .= "$clave: $valor\n";
        // }

        // // Guardar el nuevo archivo en el almacenamiento
        // $nombreNuevoArchivo = 'archivo_procesado_' . time() . '.txt';
        // Storage::put("public/$nombreNuevoArchivo", $contenidoNuevoArchivo);

        // return response()->download(storage_path("app/public/$nombreNuevoArchivo"));
 