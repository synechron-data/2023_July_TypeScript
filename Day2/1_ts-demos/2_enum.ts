// function Open(mode: string) {
//     console.log(`File opened in "${mode}" mode`);
// }

// function Open(mode: string) {
//     switch (mode) {
//         case "Read":
//         case "Write":
//         case "ReadWrite":
//             console.log(`File opened in "${mode}" mode`);
//             break;
//         default:
//             console.error(`Invalid mode "${mode}"`);
//     }
// }

// Open("Read");
// Open("Write");
// Open("ReadWrite");
// Open("Manish");

// -------------------------------------------------------------------------
// Enums allow you to define a set of constraints on the values that can be used in your code.

// enum Mode { Read, Write, ReadWrite };
// enum Mode { Read = 10, Write = 20, ReadWrite };
// enum Mode { Read = "Read", Write = "Write", ReadWrite = "ReadWrite" };
enum Mode { Read = "Read", Write = 10, ReadWrite = "ReadWrite" };

function Open(mode: Mode) {
    console.log(`File opened in "${mode}" mode`);
}

Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
// Open("Manish");
// Open(Mode.Manish);
