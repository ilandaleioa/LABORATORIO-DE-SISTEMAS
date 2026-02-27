/* ======================================
   FOOTBALL CENTER - LABORATORIO DE SISTEMAS
   Lógica de aplicación
   ====================================== */

// ======================================
// FORMACIONES - Posiciones (x%, y%) desde arriba
// ======================================
const FORMATIONS = {
    "4-4-2": {
        name: "4-4-2",
        description: "Sistema clásico equilibrado",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },   // Portero
            { x: 15, y: 75, num: 3, role: "LI" },     // Lateral izquierdo
            { x: 38, y: 80, num: 4, role: "DFC" },    // Central izq
            { x: 62, y: 80, num: 5, role: "DFC" },    // Central der
            { x: 85, y: 75, num: 2, role: "LD" },     // Lateral derecho
            { x: 15, y: 50, num: 11, role: "MI" },    // Mediocampista izq
            { x: 38, y: 55, num: 6, role: "MC" },     // Mediocampista centro izq
            { x: 62, y: 55, num: 8, role: "MC" },     // Mediocampista centro der
            { x: 85, y: 50, num: 7, role: "MD" },     // Mediocampista der
            { x: 38, y: 25, num: 9, role: "DC" },     // Delantero izq
            { x: 62, y: 25, num: 10, role: "DC" },    // Delantero der
        ]
    },
    "4-3-3": {
        name: "4-3-3",
        description: "Sistema ofensivo con tridente",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 15, y: 75, num: 3, role: "LI" },
            { x: 38, y: 80, num: 4, role: "DFC" },
            { x: 62, y: 80, num: 5, role: "DFC" },
            { x: 85, y: 75, num: 2, role: "LD" },
            { x: 30, y: 52, num: 6, role: "MC" },
            { x: 50, y: 48, num: 8, role: "MC" },
            { x: 70, y: 52, num: 10, role: "MC" },
            { x: 15, y: 25, num: 11, role: "EI" },
            { x: 50, y: 18, num: 9, role: "DC" },
            { x: 85, y: 25, num: 7, role: "ED" },
        ]
    },
    "4-2-3-1": {
        name: "4-2-3-1",
        description: "Sistema moderno con mediapunta",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 15, y: 75, num: 3, role: "LI" },
            { x: 38, y: 80, num: 4, role: "DFC" },
            { x: 62, y: 80, num: 5, role: "DFC" },
            { x: 85, y: 75, num: 2, role: "LD" },
            { x: 38, y: 58, num: 6, role: "MCD" },
            { x: 62, y: 58, num: 8, role: "MCD" },
            { x: 15, y: 38, num: 11, role: "MI" },
            { x: 50, y: 35, num: 10, role: "MP" },
            { x: 85, y: 38, num: 7, role: "MD" },
            { x: 50, y: 18, num: 9, role: "DC" },
        ]
    },
    "3-5-2": {
        name: "3-5-2",
        description: "Sistema con carrileros y 3 centrales",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 25, y: 78, num: 3, role: "DFC" },
            { x: 50, y: 80, num: 4, role: "DFC" },
            { x: 75, y: 78, num: 5, role: "DFC" },
            { x: 10, y: 52, num: 11, role: "CAI" },
            { x: 35, y: 55, num: 6, role: "MC" },
            { x: 50, y: 50, num: 8, role: "MC" },
            { x: 65, y: 55, num: 10, role: "MC" },
            { x: 90, y: 52, num: 7, role: "CAD" },
            { x: 38, y: 23, num: 9, role: "DC" },
            { x: 62, y: 23, num: 11, role: "DC" },
        ]
    },
    "3-4-3": {
        name: "3-4-3",
        description: "Sistema ultra-ofensivo",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 25, y: 78, num: 3, role: "DFC" },
            { x: 50, y: 80, num: 4, role: "DFC" },
            { x: 75, y: 78, num: 5, role: "DFC" },
            { x: 12, y: 52, num: 11, role: "CAI" },
            { x: 40, y: 55, num: 6, role: "MC" },
            { x: 60, y: 55, num: 8, role: "MC" },
            { x: 88, y: 52, num: 7, role: "CAD" },
            { x: 20, y: 22, num: 10, role: "EI" },
            { x: 50, y: 18, num: 9, role: "DC" },
            { x: 80, y: 22, num: 11, role: "ED" },
        ]
    },
    "4-1-4-1": {
        name: "4-1-4-1",
        description: "Sistema defensivo con pivote",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 15, y: 75, num: 3, role: "LI" },
            { x: 38, y: 80, num: 4, role: "DFC" },
            { x: 62, y: 80, num: 5, role: "DFC" },
            { x: 85, y: 75, num: 2, role: "LD" },
            { x: 50, y: 62, num: 6, role: "MCD" },
            { x: 15, y: 42, num: 11, role: "MI" },
            { x: 38, y: 45, num: 8, role: "MC" },
            { x: 62, y: 45, num: 10, role: "MC" },
            { x: 85, y: 42, num: 7, role: "MD" },
            { x: 50, y: 18, num: 9, role: "DC" },
        ]
    },
    "5-3-2": {
        name: "5-3-2",
        description: "Sistema defensivo con 5 atrás",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 8, y: 72, num: 3, role: "CAI" },
            { x: 28, y: 80, num: 4, role: "DFC" },
            { x: 50, y: 82, num: 5, role: "DFC" },
            { x: 72, y: 80, num: 6, role: "DFC" },
            { x: 92, y: 72, num: 2, role: "CAD" },
            { x: 30, y: 52, num: 8, role: "MC" },
            { x: 50, y: 48, num: 10, role: "MC" },
            { x: 70, y: 52, num: 7, role: "MC" },
            { x: 38, y: 24, num: 9, role: "DC" },
            { x: 62, y: 24, num: 11, role: "DC" },
        ]
    },
    "4-5-1": {
        name: "4-5-1",
        description: "Sistema compacto en mediocampo",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 15, y: 75, num: 3, role: "LI" },
            { x: 38, y: 80, num: 4, role: "DFC" },
            { x: 62, y: 80, num: 5, role: "DFC" },
            { x: 85, y: 75, num: 2, role: "LD" },
            { x: 12, y: 45, num: 11, role: "MI" },
            { x: 33, y: 50, num: 6, role: "MC" },
            { x: 50, y: 45, num: 8, role: "MC" },
            { x: 67, y: 50, num: 10, role: "MC" },
            { x: 88, y: 45, num: 7, role: "MD" },
            { x: 50, y: 20, num: 9, role: "DC" },
        ]
    },
    "4-4-1-1": {
        name: "4-4-1-1",
        description: "Sistema con mediapunta detrás del punta",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 15, y: 75, num: 3, role: "LI" },
            { x: 38, y: 80, num: 4, role: "DFC" },
            { x: 62, y: 80, num: 5, role: "DFC" },
            { x: 85, y: 75, num: 2, role: "LD" },
            { x: 15, y: 50, num: 11, role: "MI" },
            { x: 38, y: 55, num: 6, role: "MC" },
            { x: 62, y: 55, num: 8, role: "MC" },
            { x: 85, y: 50, num: 7, role: "MD" },
            { x: 50, y: 33, num: 10, role: "MP" },
            { x: 50, y: 18, num: 9, role: "DC" },
        ]
    },
    "3-4-1-2": {
        name: "3-4-1-2",
        description: "Sistema con rombo en ataque",
        positions: [
            { x: 50, y: 93, num: 1, role: "POR" },
            { x: 25, y: 78, num: 3, role: "DFC" },
            { x: 50, y: 80, num: 4, role: "DFC" },
            { x: 75, y: 78, num: 5, role: "DFC" },
            { x: 10, y: 52, num: 11, role: "CAI" },
            { x: 38, y: 55, num: 6, role: "MC" },
            { x: 62, y: 55, num: 8, role: "MC" },
            { x: 90, y: 52, num: 7, role: "CAD" },
            { x: 50, y: 35, num: 10, role: "MP" },
            { x: 38, y: 20, num: 9, role: "DC" },
            { x: 62, y: 20, num: 11, role: "DC" },
        ]
    }
};

// ======================================
// ANÁLISIS TÁCTICO POR FORMACIÓN
// ======================================
const ANALYSIS_DATA = {
    "4-4-2": {
        stats: { ataque: 70, defensa: 75, mediocampo: 65, amplitud: 80, pressing: 70, contragolpe: 75 },
        strengths: [
            "Equilibrio defensivo y ofensivo excepcional, fácil de entender para los jugadores",
            "Gran cobertura de las bandas con los 4 centrocampistas",
            "Dos delanteros generan superioridad y ocupación del área rival",
            "Solidez en las transiciones defensivas con dos líneas de cuatro",
            "Facilita el juego directo y los centros laterales al área"
        ],
        weaknesses: [
            "Puede quedar superado en el centro del campo contra formaciones con 3 mediocampistas",
            "Falta de un mediapunta que conecte mediocampo y ataque",
            "Los extremos tienen gran carga de trabajo defensivo y ofensivo",
            "Vulnerable a sistemas con mediocampistas por dentro (4-2-3-1, 4-3-3)",
            "Espacios entre líneas que pueden ser explotados por equipos con buen juego posicional"
        ],
        tips: [
            "Ideal contra equipos que juegan con defensa de 3 centrales",
            "Los laterales deben ser activos en ataque para generar amplitud extra",
            "Fundamental la conexión y movilidad entre los dos delanteros",
            "Considerar variantes como el 4-4-2 en rombo para mayor control del centro"
        ]
    },
    "4-3-3": {
        stats: { ataque: 85, defensa: 65, mediocampo: 80, amplitud: 85, pressing: 85, contragolpe: 70 },
        strengths: [
            "Tridente ofensivo genera gran presión sobre la línea defensiva rival",
            "Superioridad numérica en mediocampo con 3 centrocampistas",
            "Presión alta efectiva con los tres delanteros cortando líneas de pase",
            "Gran amplitud ofensiva con los extremos abiertos en banda",
            "Versatilidad táctica: los extremos pueden ir por dentro o por fuera"
        ],
        weaknesses: [
            "Puede dejar expuestos a los laterales si los extremos no bajan a defender",
            "Requiere centrocampistas con gran capacidad física y técnica",
            "Vulnerable en las transiciones defensivas si se pierde el balón en ataque",
            "Los espacios entre central y lateral pueden ser explotados por contraataques rápidos",
            "Necesita un pivote defensivo de garantías para equilibrar"
        ],
        tips: [
            "Ideal para equipos que quieren dominar la posesión y presionar alto",
            "El mediocampista central debe ser un buen distribuidor de juego",
            "Los extremos deben tener velocidad y desborde en el 1vs1",
            "Variante con falso 9 puede desconcertar a defensas rivales"
        ]
    },
    "4-2-3-1": {
        stats: { ataque: 78, defensa: 72, mediocampo: 82, amplitud: 75, pressing: 80, contragolpe: 78 },
        strengths: [
            "El doble pivote ofrece gran protección a la línea defensiva",
            "El mediapunta conecta mediocampo y ataque de manera fluida",
            "Versatilidad táctica: puede transformarse en 4-4-2 o 4-5-1 fácilmente",
            "Presión escalonada con el delantero y los tres mediapuntas/extremos",
            "Balance perfecto entre solidez defensiva y capacidad creativa"
        ],
        weaknesses: [
            "El delantero centro puede quedar aislado si los interiores no suben",
            "Dependencia excesiva del mediapunta para generar juego ofensivo",
            "Los extremos deben recorrer mucha distancia en ambas fases",
            "Si el doble pivote no es coordinado, se abren espacios entre líneas",
            "Puede resultar predecible si no hay variantes en la fase ofensiva"
        ],
        tips: [
            "Uno de los pivotes debe ser más defensivo y otro más creativo",
            "El mediapunta debe tener libertad de movimientos para encontrar espacios",
            "Ideal contra equipos que juegan con un solo mediocampista defensivo",
            "El delantero centro debe ser capaz de retener el balón de espaldas"
        ]
    },
    "3-5-2": {
        stats: { ataque: 72, defensa: 70, mediocampo: 85, amplitud: 70, pressing: 68, contragolpe: 72 },
        strengths: [
            "Dominio total del centro del campo con 5 centrocampistas",
            "Los carrileros aportan amplitud y profundidad por las bandas",
            "Tres centrales proporcionan solidez y permiten salida de balón limpia",
            "Dos delanteros generan asociaciones y movimientos en ataque",
            "Gran capacidad de adaptación durante el partido"
        ],
        weaknesses: [
            "Los carrileros tienen un desgaste físico enorme (ida y vuelta constante)",
            "Vulnerable por las bandas si los carrileros no bajan a tiempo",
            "Requiere centrales con buena salida de balón, no solo defensivos",
            "Puede ser superado por equipos con extremos rápidos en el 1vs1",
            "Complejidad táctica: requiere gran entendimiento colectivo"
        ],
        tips: [
            "Los carrileros deben ser jugadores polivalentes con gran fondo físico",
            "El central del medio debe actuar como líbero y organizar la salida",
            "Funciona bien contra sistemas de 4 defensas al generar superioridad numérica",
            "Transiciones rápidas son clave al recuperar el balón en mediocampo"
        ]
    },
    "3-4-3": {
        stats: { ataque: 90, defensa: 55, mediocampo: 72, amplitud: 80, pressing: 88, contragolpe: 60 },
        strengths: [
            "Máxima presión ofensiva con tres delanteros y carrileros que suben",
            "Generación constante de situaciones de gol por acumulación",
            "Presión alta devastadora al perder el balón",
            "Superioridad numérica en ataque con hasta 6-7 jugadores",
            "Ideal para equipos con gran calidad individual arriba"
        ],
        weaknesses: [
            "Extremadamente vulnerable en defensa, solo 3 atrás",
            "Contraataques rivales con espacios enormes a la espalda",
            "Desgaste físico brutal para los carrileros",
            "Solo funciona con clara superioridad sobre el rival",
            "Requiere centrales muy rápidos para cubrir espacios"
        ],
        tips: [
            "Solo usar cuando se necesita remontar o ante rivales muy inferiores",
            "La presión tras pérdida debe ser inmediata para no exponer la defensa",
            "Los centrales deben adelantar su posición para compactar el equipo",
            "Puede mutar a 5-4-1 en fase defensiva si los carrileros bajan"
        ]
    },
    "4-1-4-1": {
        stats: { ataque: 62, defensa: 82, mediocampo: 78, amplitud: 75, pressing: 72, contragolpe: 80 },
        strengths: [
            "El pivote único ofrece protección extra a la defensa",
            "Cuatro mediocampistas forman una línea compacta difícil de superar",
            "Excelente para contragolpes rápidos con los extremos",
            "Gran solidez defensiva con dos líneas muy juntas",
            "Ideal para partidos donde hay que defender resultado"
        ],
        weaknesses: [
            "El delantero centro queda muy aislado del juego",
            "Poco poder ofensivo en ataque estático",
            "Si el pivote es superado, la defensa queda muy expuesta",
            "Dificultad para generar juego combinativo en el último tercio",
            "Los interiores deben hacer un gran esfuerzo de ida y vuelta"
        ],
        tips: [
            "El pivote debe ser un jugador posicional, inteligente y con buen pase",
            "Ideal para equipos visitantes en campos difíciles",
            "Los extremos deben ser rápidos para explotar los espacios al contraataque",
            "El delantero debe ser fuerte para retener el balón y esperar apoyos"
        ]
    },
    "5-3-2": {
        stats: { ataque: 58, defensa: 88, mediocampo: 68, amplitud: 60, pressing: 55, contragolpe: 75 },
        strengths: [
            "Máxima solidez defensiva con 5 jugadores atrás",
            "Los carrileros pueden aportar amplitud cuando se tiene el balón",
            "Dos delanteros dan opción de juego directo y asociación",
            "Difícil de superar por el centro con tres mediocampistas y cinco defensas",
            "Ideal para aguantar resultado y buscar contraataques"
        ],
        weaknesses: [
            "Muy poco poder ofensivo y generación de ocasiones",
            "Si los carrileros no suben, el equipo se queda con solo 5 jugadores atrás",
            "Dificultad para mantener la posesión prolongada",
            "Invita al rival a tener el balón y atacar constantemente",
            "Puede generar desconexión entre defensa y ataque"
        ],
        tips: [
            "Usar cuando la diferencia de nivel con el rival es grande a favor del otro",
            "Los carrileros deben saber cuándo subir y cuándo quedarse",
            "Fundamental la velocidad en las transiciones ofensivas",
            "El centrocampista central debe distribuir rápido tras recuperar"
        ]
    },
    "4-5-1": {
        stats: { ataque: 55, defensa: 80, mediocampo: 88, amplitud: 72, pressing: 70, contragolpe: 76 },
        strengths: [
            "Dominio absoluto del mediocampo con 5 centrocampistas",
            "Gran compacidad entre líneas defensivas y mediocampo",
            "Versatilidad: puede mutar a 4-3-3 en ataque",
            "Presión alta efectiva gracias a la superioridad numérica en mediocampo",
            "Los extremos ofrecen amplitud y opciones de ataque rápido"
        ],
        weaknesses: [
            "Delantero muy aislado, difícil mantener presión arriba",
            "Pocos jugadores en zona de finalización",
            "Dependencia de los goles de los mediocampistas",
            "Ataque predecible si no hay movimientos de ruptura",
            "Puede ser estéril ofensivamente si los mediocampistas no llegan al área"
        ],
        tips: [
            "Ideal para partidos de eliminatoria donde prima no encajar",
            "Los interiores deben llegar al área para aportar gol",
            "El delantero debe ser muy completo: retener, asociar y finalizar",
            "Transiciones rápidas al recuperar son la clave del éxito ofensivo"
        ]
    },
    "4-4-1-1": {
        stats: { ataque: 68, defensa: 76, mediocampo: 72, amplitud: 78, pressing: 72, contragolpe: 78 },
        strengths: [
            "El mediapunta ofrece conexión entre mediocampo y ataque",
            "Solidez defensiva del 4-4-2 con la creatividad de un enganche",
            "Banda bien cubierta con los extremos en línea de 4",
            "El delantero tiene apoyo cercano del mediapunta",
            "Buen balance entre solidez y capacidad ofensiva"
        ],
        weaknesses: [
            "El mediapunta puede quedar en tierra de nadie si no se mueve bien",
            "Si el enganche no rinde, se pierde la conexión ofensiva",
            "Puede dejar en inferioridad el centro del campo ante 3 mediocampistas",
            "Los extremos tienen gran desgaste defensivo",
            "Menos efectivo contra equipos que cierran bien los espacios"
        ],
        tips: [
            "El mediapunta debe tener libertad para buscar espacios entre líneas",
            "Ideal cuando tienes un jugador creativo que no encaja como mediocampista puro",
            "El delantero debe hacer movimientos de arrastre para abrir espacios al 10",
            "Los extremos deben llegar al fondo para centrar cuando el mediapunta arrastra marcas"
        ]
    },
    "3-4-1-2": {
        stats: { ataque: 76, defensa: 64, mediocampo: 78, amplitud: 68, pressing: 70, contragolpe: 68 },
        strengths: [
            "Rombo en ataque genera superioridad numérica en zonas de finalización",
            "Dos delanteros con mediapunta crean asociaciones letales",
            "Los carrileros aportan amplitud que compensa la estrechez del rombo",
            "Tres centrales dan solidez y permiten salida limpia",
            "Flexibilidad: puede mutar a 5-2-1-2 en defensa"
        ],
        weaknesses: [
            "Las bandas dependen exclusivamente de los carrileros",
            "Si los carrileros se cansan, el equipo pierde amplitud",
            "Vulnerable a equipos con extremos rápidos por las bandas",
            "El mediapunta puede quedar anulado si el rival cierra el centro",
            "Complejidad táctica alta, requiere mucho entrenamiento"
        ],
        tips: [
            "Los carrileros son la pieza clave: deben tener gran fondo físico",
            "Ideal cuando tienes dos delanteros de gran nivel y un buen enganche",
            "Los centrales deben abrirse para generar salida limpia de balón",
            "El pressing tras pérdida debe ser coordinado para no dejar huecos"
        ]
    }
};

// ======================================
// PLANTILLA POR DEFECTO
// ======================================
const DEFAULT_SQUAD = [
    { num: 1, name: "Portero", position: "POR" },
    { num: 2, name: "Lateral Derecho", position: "LD" },
    { num: 3, name: "Lateral Izquierdo", position: "LI" },
    { num: 4, name: "Central", position: "DFC" },
    { num: 5, name: "Central", position: "DFC" },
    { num: 6, name: "Mediocampista", position: "MC" },
    { num: 7, name: "Extremo Derecho", position: "ED" },
    { num: 8, name: "Mediocampista", position: "MC" },
    { num: 9, name: "Delantero Centro", position: "DC" },
    { num: 10, name: "Mediapunta", position: "MP" },
    { num: 11, name: "Extremo Izquierdo", position: "EI" },
];

// ======================================
// ESTADO GLOBAL
// ======================================
let currentFormation = "4-4-2";
let draggedPlayer = null;
let dragOffset = { x: 0, y: 0 };

// ======================================
// INICIALIZACIÓN
// ======================================
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initFormationSelector();
    initAnalysisPanel();
    initComparisonSection();
    initMatchupSection();
    initSquadSection();
    initFullscreen();
    initMobilePanels();
    renderFormation(currentFormation);
});

// ======================================
// NAVEGACIÓN
// ======================================
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            
            navItems.forEach(n => n.classList.remove("active"));
            item.classList.add("active");
            
            document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
            document.getElementById(`section-${section}`).classList.add("active");
        });
    });
}

// ======================================
// SELECTOR DE FORMACIÓN
// ======================================
function initFormationSelector() {
    const select = document.getElementById("formationSelect");
    const resetBtn = document.getElementById("btnReset");
    
    select.addEventListener("change", () => {
        currentFormation = select.value;
        renderFormation(currentFormation);
        showAnalysis(currentFormation);
    });
    
    resetBtn.addEventListener("click", () => {
        renderFormation(currentFormation);
        showAnalysis(currentFormation);
    });
}

// ======================================
// RENDERIZAR FORMACIÓN EN EL CAMPO
// ======================================
function renderFormation(formationKey) {
    const pitch = document.getElementById("pitch");
    
    // Eliminar jugadores anteriores
    pitch.querySelectorAll(".player").forEach(p => p.remove());
    
    const formation = FORMATIONS[formationKey];
    if (!formation) return;
    
    formation.positions.forEach((pos, index) => {
        const player = document.createElement("div");
        player.className = "player team-home";
        player.textContent = pos.num;
        player.style.left = pos.x + "%";
        player.style.top = pos.y + "%";
        player.dataset.index = index;
        
        // Tooltip con rol
        const nameSpan = document.createElement("span");
        nameSpan.className = "player-name";
        nameSpan.textContent = pos.role;
        player.appendChild(nameSpan);
        
        // Drag & Drop
        initPlayerDrag(player, pitch);
        
        pitch.appendChild(player);
        
        // Animación de entrada
        player.style.opacity = "0";
        player.style.transform = "translate(-50%, -50%) scale(0.3)";
        setTimeout(() => {
            player.style.opacity = "1";
            player.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50 + index * 40);
    });
}

// ======================================
// DRAG & DROP DE JUGADORES
// ======================================
function initPlayerDrag(player, pitch) {
    let isDragging = false;
    
    const startDrag = (e) => {
        isDragging = true;
        player.style.transition = "none";
        player.style.zIndex = 20;
        
        const rect = pitch.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        dragOffset.x = clientX - rect.left - (parseFloat(player.style.left) / 100) * rect.width;
        dragOffset.y = clientY - rect.top - (parseFloat(player.style.top) / 100) * rect.height;
        
        e.preventDefault();
    };
    
    const moveDrag = (e) => {
        if (!isDragging) return;
        
        const rect = pitch.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        let x = ((clientX - rect.left - dragOffset.x) / rect.width) * 100;
        let y = ((clientY - rect.top - dragOffset.y) / rect.height) * 100;
        
        // Limitar dentro del campo
        x = Math.max(4, Math.min(96, x));
        y = Math.max(4, Math.min(96, y));
        
        player.style.left = x + "%";
        player.style.top = y + "%";
        
        e.preventDefault();
    };
    
    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        player.style.transition = "";
        player.style.zIndex = 5;
    };
    
    // Mouse events
    player.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", moveDrag);
    document.addEventListener("mouseup", endDrag);
    
    // Touch events
    player.addEventListener("touchstart", startDrag, { passive: false });
    document.addEventListener("touchmove", moveDrag, { passive: false });
    document.addEventListener("touchend", endDrag);
}

// ======================================
// PANEL DE ANÁLISIS IA (PANELES LATERALES)
// ======================================
function initAnalysisPanel() {
    const btnAnalyze = document.getElementById("btnAnalyze");
    
    btnAnalyze.addEventListener("click", () => {
        showAnalysis(currentFormation);
    });
    
    // Cargar análisis automáticamente al inicio
    showAnalysis(currentFormation);
}



function showAnalysis(formationKey) {
    const leftPanel = document.getElementById("sidePanelLeft");
    const rightPanel = document.getElementById("sidePanelRight");
    const leftContent = document.getElementById("sidePanelLeftContent");
    const rightContent = document.getElementById("sidePanelRightContent");
    
    // Mostrar loading en ambos
    const loadingHTML = `
        <div class="analysis-loading">
            <div class="spinner"></div>
            <p>Analizando sistema ${formationKey}...</p>
        </div>
    `;
    leftContent.innerHTML = loadingHTML;
    rightContent.innerHTML = loadingHTML;
    
    // Simular análisis IA
    setTimeout(() => {
        const data = ANALYSIS_DATA[formationKey];
        if (!data) {
            leftContent.innerHTML = "<p>No hay datos de análisis para esta formación.</p>";
            rightContent.innerHTML = "";
            return;
        }
        
        // Panel izquierdo: Stats + Recomendaciones Tácticas
        leftContent.innerHTML = `
            <div class="analysis-section" data-section="stats" data-formation="${formationKey}">
                <h4>
                    <span>📊 Estadísticas ${formationKey}</span>
                    <button class="btn-edit-section" onclick="toggleEditSection(this, 'stats', '${formationKey}')" title="Editar">
                        <span class="material-icons-outlined">edit</span>
                    </button>
                </h4>
                <div class="stat-bars">
                    ${Object.entries(data.stats).map(([key, val]) => `
                        <div class="stat-bar" data-stat-key="${key}">
                            <div class="stat-bar-header">
                                <span class="stat-bar-label">${capitalizeFirst(key)}</span>
                                <span class="stat-bar-value">${val}</span>
                            </div>
                            <div class="stat-bar-track">
                                <div class="stat-bar-fill" style="width: 0%;" data-value="${val}"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
            
            <div class="analysis-section tips" data-section="tips" data-formation="${formationKey}">
                <h4>
                    <span><span class="icon-tip material-icons-outlined" style="font-size:16px">lightbulb</span> Recomendaciones Tácticas</span>
                    <button class="btn-edit-section" onclick="toggleEditSection(this, 'tips', '${formationKey}')" title="Editar">
                        <span class="material-icons-outlined">edit</span>
                    </button>
                </h4>
                <ul>
                    ${data.tips.map(t => `<li>${t}</li>`).join("")}
                </ul>
            </div>
        `;
        
        // Panel derecho: Debilidades + Fortalezas
        rightContent.innerHTML = `
            <div class="analysis-section weaknesses" data-section="weaknesses" data-formation="${formationKey}">
                <h4>
                    <span><span class="icon-weakness material-icons-outlined" style="font-size:16px">warning</span> Debilidades</span>
                    <button class="btn-edit-section" onclick="toggleEditSection(this, 'weaknesses', '${formationKey}')" title="Editar">
                        <span class="material-icons-outlined">edit</span>
                    </button>
                </h4>
                <ul>
                    ${data.weaknesses.map(w => `<li>${w}</li>`).join("")}
                </ul>
            </div>
            
            <div class="analysis-section strengths" data-section="strengths" data-formation="${formationKey}">
                <h4>
                    <span><span class="icon-strength material-icons-outlined" style="font-size:16px">check_circle</span> Fortalezas</span>
                    <button class="btn-edit-section" onclick="toggleEditSection(this, 'strengths', '${formationKey}')" title="Editar">
                        <span class="material-icons-outlined">edit</span>
                    </button>
                </h4>
                <ul>
                    ${data.strengths.map(s => `<li>${s}</li>`).join("")}
                </ul>
            </div>
        `;
        
        // Animar barras de estadísticas
        setTimeout(() => {
            leftContent.querySelectorAll(".stat-bar-fill").forEach(bar => {
                bar.style.width = bar.dataset.value + "%";
            });
        }, 100);
        
    }, 1200);
}

// ======================================
// SECCIÓN COMPARACIÓN
// ======================================
function initComparisonSection() {
    const selects = document.querySelectorAll(".comp-select");
    const btnCompare = document.getElementById("btnCompare");
    
    selects.forEach(sel => {
        sel.addEventListener("change", () => {
            const compIndex = sel.dataset.comp;
            renderMiniPitch(compIndex, sel.value);
        });
        // Render inicial
        renderMiniPitch(sel.dataset.comp, sel.value);
    });
    
    btnCompare.addEventListener("click", () => {
        const f1 = document.querySelector('.comp-select[data-comp="1"]').value;
        const f2 = document.querySelector('.comp-select[data-comp="2"]').value;
        showComparison(f1, f2);
    });
}

function renderMiniPitch(compIndex, formationKey) {
    const miniPitch = document.querySelector(`.mini-pitch[data-formation="${compIndex}"]`);
    miniPitch.querySelectorAll(".mini-player").forEach(p => p.remove());
    
    const formation = FORMATIONS[formationKey];
    if (!formation) return;
    
    formation.positions.forEach((pos, i) => {
        const player = document.createElement("div");
        player.className = "mini-player";
        player.textContent = pos.num;
        player.style.left = pos.x + "%";
        player.style.top = pos.y + "%";
        
        miniPitch.appendChild(player);
        
        player.style.opacity = "0";
        player.style.transform = "translate(-50%, -50%) scale(0)";
        setTimeout(() => {
            player.style.opacity = "1";
            player.style.transform = "translate(-50%, -50%) scale(1)";
        }, 30 + i * 25);
    });
}

function showComparison(f1, f2) {
    const result = document.getElementById("comparisonResult");
    const data1 = ANALYSIS_DATA[f1];
    const data2 = ANALYSIS_DATA[f2];
    
    if (!data1 || !data2) return;
    
    result.classList.add("visible");
    result.innerHTML = `
        <h4 style="margin-bottom:16px; font-size:15px;">⚡ Comparativa: ${f1} vs ${f2}</h4>
        <div class="stat-bars">
            ${Object.keys(data1.stats).map(key => {
                const v1 = data1.stats[key];
                const v2 = data2.stats[key];
                const diff = v1 - v2;
                const winner = diff > 0 ? f1 : diff < 0 ? f2 : "Empate";
                return `
                    <div class="stat-bar" style="margin-bottom:18px;">
                        <div class="stat-bar-header">
                            <span class="stat-bar-label">${capitalizeFirst(key)}</span>
                            <span class="stat-bar-value">${v1} vs ${v2} → ${winner}</span>
                        </div>
                        <div style="display:flex; gap:4px;">
                            <div class="stat-bar-track" style="flex:1">
                                <div class="stat-bar-fill" style="width:${v1}%; background:linear-gradient(90deg, var(--accent), var(--accent-light))"></div>
                            </div>
                            <div class="stat-bar-track" style="flex:1">
                                <div class="stat-bar-fill" style="width:${v2}%; background:linear-gradient(90deg, #3b82f6, #60a5fa)"></div>
                            </div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
        <div style="display:flex; gap:12px; margin-top:8px;">
            <span style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--text-secondary);">
                <span style="width:12px;height:12px;background:var(--accent);border-radius:2px;display:inline-block;"></span> ${f1}
            </span>
            <span style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--text-secondary);">
                <span style="width:12px;height:12px;background:#3b82f6;border-radius:2px;display:inline-block;"></span> ${f2}
            </span>
        </div>
    `;
}

// ======================================
// SECCIÓN ENFRENTAMIENTO
// ======================================
function initMatchupSection() {
    const homeSelect = document.getElementById("homeFormation");
    const awaySelect = document.getElementById("awayFormation");
    const btnMatch = document.getElementById("btnMatchAnalysis");
    
    const renderMatchup = () => {
        renderMatchupPitch(homeSelect.value, awaySelect.value);
    };
    
    homeSelect.addEventListener("change", renderMatchup);
    awaySelect.addEventListener("change", renderMatchup);
    
    btnMatch.addEventListener("click", () => {
        showMatchupAnalysis(homeSelect.value, awaySelect.value);
    });
    
    renderMatchup();
}

function renderMatchupPitch(homeFormation, awayFormation) {
    const field = document.querySelector(".matchup-field");
    field.querySelectorAll(".player").forEach(p => p.remove());
    
    const home = FORMATIONS[homeFormation];
    const away = FORMATIONS[awayFormation];
    
    if (home) {
        home.positions.forEach((pos, i) => {
            const player = document.createElement("div");
            player.className = "player team-home";
            player.textContent = pos.num;
            // Home en la mitad inferior
            player.style.left = pos.x + "%";
            player.style.top = (50 + (pos.y - 50) * 0.5) + "%";
            field.appendChild(player);
        });
    }
    
    if (away) {
        away.positions.forEach((pos, i) => {
            const player = document.createElement("div");
            player.className = "player team-away";
            player.textContent = pos.num;
            // Away en la mitad superior (espejado)
            player.style.left = (100 - pos.x) + "%";
            player.style.top = (50 - (pos.y - 50) * 0.5) + "%";
            field.appendChild(player);
        });
    }
}

function showMatchupAnalysis(homeF, awayF) {
    const container = document.getElementById("matchupAnalysis");
    const homeData = ANALYSIS_DATA[homeF];
    const awayData = ANALYSIS_DATA[awayF];
    
    if (!homeData || !awayData) return;
    
    container.innerHTML = `<div class="analysis-loading"><div class="spinner"></div><p>Analizando enfrentamiento...</p></div>`;
    
    setTimeout(() => {
        // Comparar stats
        let homeAdvantages = [];
        let awayAdvantages = [];
        
        Object.keys(homeData.stats).forEach(key => {
            const diff = homeData.stats[key] - awayData.stats[key];
            if (diff > 5) homeAdvantages.push(`${capitalizeFirst(key)} (+${diff})`);
            if (diff < -5) awayAdvantages.push(`${capitalizeFirst(key)} (+${Math.abs(diff)})`);
        });
        
        container.innerHTML = `
            <div style="background:var(--bg-card); border-radius:8px; padding:16px; margin-top:8px; border:1px solid var(--border);">
                <h4 style="margin-bottom:12px; font-size:14px;">⚔️ ${homeF} vs ${awayF}</h4>
                <div style="margin-bottom:12px;">
                    <p style="color:#22c55e; font-size:12px; font-weight:700; margin-bottom:6px;">Ventajas Local (${homeF}):</p>
                    <p style="font-size:12px;">${homeAdvantages.length > 0 ? homeAdvantages.join(", ") : "Sin ventajas claras"}</p>
                </div>
                <div>
                    <p style="color:#3b82f6; font-size:12px; font-weight:700; margin-bottom:6px;">Ventajas Visitante (${awayF}):</p>
                    <p style="font-size:12px;">${awayAdvantages.length > 0 ? awayAdvantages.join(", ") : "Sin ventajas claras"}</p>
                </div>
            </div>
        `;
    }, 800);
}

// ======================================
// SECCIÓN PLANTILLA
// ======================================
function initSquadSection() {
    const grid = document.getElementById("squadGrid");
    
    DEFAULT_SQUAD.forEach(p => {
        const card = document.createElement("div");
        card.className = "squad-card";
        card.innerHTML = `
            <div class="squad-number">${p.num}</div>
            <div class="squad-info">
                <div class="squad-name">${p.name}</div>
                <div class="squad-position">${p.position}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ======================================
// PANTALLA COMPLETA
// ======================================
function initFullscreen() {
    const btnFullscreen = document.getElementById("btnFullscreen");
    const appLayout = document.getElementById("appLayout");
    if (!btnFullscreen || !appLayout) return;

    function enterFullscreen() {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
        btnFullscreen.querySelector(".material-icons-outlined").textContent = "fullscreen_exit";
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        btnFullscreen.querySelector(".material-icons-outlined").textContent = "fullscreen";
    }

    btnFullscreen.addEventListener("click", () => {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    });

    // Actualizar icono cuando se sale con Escape o de otra forma
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            btnFullscreen.querySelector(".material-icons-outlined").textContent = "fullscreen";
        }
    });
    document.addEventListener("webkitfullscreenchange", () => {
        if (!document.webkitFullscreenElement) {
            btnFullscreen.querySelector(".material-icons-outlined").textContent = "fullscreen";
        }
    });
}

// ======================================
// EDICIÓN DEL ANÁLISIS IA
// ======================================
function toggleEditSection(btn, sectionType, formationKey) {
    const sectionEl = btn.closest('.analysis-section');
    const isEditing = sectionEl.classList.contains('editing');
    
    if (isEditing) {
        cancelEditSection(sectionEl, sectionType, formationKey);
    } else {
        startEditSection(sectionEl, sectionType, formationKey);
    }
}

function startEditSection(sectionEl, sectionType, formationKey) {
    const data = ANALYSIS_DATA[formationKey];
    if (!data) return;
    
    sectionEl.classList.add('editing');
    const editBtn = sectionEl.querySelector('.btn-edit-section');
    editBtn.innerHTML = '<span class="material-icons-outlined">close</span>';
    editBtn.title = 'Cancelar';
    
    if (sectionType === 'stats') {
        const statBars = sectionEl.querySelector('.stat-bars');
        statBars.innerHTML = Object.entries(data.stats).map(([key, val]) => `
            <div class="stat-edit-row" data-stat-key="${key}">
                <label class="stat-edit-label">${capitalizeFirst(key)}</label>
                <input type="range" class="stat-edit-range" min="0" max="100" value="${val}" 
                    oninput="this.nextElementSibling.textContent = this.value">
                <span class="stat-edit-value">${val}</span>
            </div>
        `).join('');
        
        // Add save button
        const saveBar = document.createElement('div');
        saveBar.className = 'edit-action-bar';
        saveBar.innerHTML = `
            <button class="btn-edit-save" onclick="saveEditStats(this, '${formationKey}')">
                <span class="material-icons-outlined">check</span> Guardar
            </button>
        `;
        statBars.appendChild(saveBar);
    } else {
        // For tips, weaknesses, strengths - editable list
        const ul = sectionEl.querySelector('ul');
        const items = data[sectionType];
        
        ul.innerHTML = items.map((item, idx) => `
            <li class="edit-item">
                <textarea class="edit-textarea" rows="2">${item}</textarea>
                <button class="btn-remove-item" onclick="removeEditItem(this)" title="Eliminar">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </li>
        `).join('');
        
        // Add "add item" and save buttons
        const actionBar = document.createElement('div');
        actionBar.className = 'edit-action-bar';
        actionBar.innerHTML = `
            <button class="btn-edit-add" onclick="addEditItem(this)">
                <span class="material-icons-outlined">add</span> Añadir
            </button>
            <button class="btn-edit-save" onclick="saveEditList(this, '${sectionType}', '${formationKey}')">
                <span class="material-icons-outlined">check</span> Guardar
            </button>
        `;
        ul.parentElement.appendChild(actionBar);
    }
}

function cancelEditSection(sectionEl, sectionType, formationKey) {
    sectionEl.classList.remove('editing');
    // Re-render the analysis to restore original view
    showAnalysis(formationKey);
}

function addEditItem(btn) {
    const ul = btn.closest('.analysis-section').querySelector('ul');
    const li = document.createElement('li');
    li.className = 'edit-item';
    li.innerHTML = `
        <textarea class="edit-textarea" rows="2" placeholder="Escribe aquí..."></textarea>
        <button class="btn-remove-item" onclick="removeEditItem(this)" title="Eliminar">
            <span class="material-icons-outlined">delete</span>
        </button>
    `;
    ul.appendChild(li);
    li.querySelector('textarea').focus();
}

function removeEditItem(btn) {
    const li = btn.closest('li');
    li.style.opacity = '0';
    li.style.transform = 'translateX(-20px)';
    setTimeout(() => li.remove(), 200);
}

function saveEditStats(btn, formationKey) {
    const sectionEl = btn.closest('.analysis-section');
    const rows = sectionEl.querySelectorAll('.stat-edit-row');
    
    rows.forEach(row => {
        const key = row.dataset.statKey;
        const val = parseInt(row.querySelector('.stat-edit-range').value);
        ANALYSIS_DATA[formationKey].stats[key] = val;
    });
    
    sectionEl.classList.remove('editing');
    showAnalysis(formationKey);
    showSaveConfirmation(sectionEl);
}

function saveEditList(btn, sectionType, formationKey) {
    const sectionEl = btn.closest('.analysis-section');
    const textareas = sectionEl.querySelectorAll('.edit-textarea');
    
    const newItems = [];
    textareas.forEach(ta => {
        const val = ta.value.trim();
        if (val) newItems.push(val);
    });
    
    ANALYSIS_DATA[formationKey][sectionType] = newItems;
    sectionEl.classList.remove('editing');
    showAnalysis(formationKey);
    showSaveConfirmation(sectionEl);
}

function showSaveConfirmation(nearElement) {
    // Brief visual feedback
    const toast = document.createElement('div');
    toast.className = 'save-toast';
    toast.innerHTML = '<span class="material-icons-outlined">check_circle</span> Guardado';
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('visible');
    });
    
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

// ======================================
// PANELES MÓVILES (SLIDE-IN DRAWERS)
// ======================================
function initMobilePanels() {
    const btnToggleLeft = document.getElementById("btnToggleLeft");
    const btnToggleRight = document.getElementById("btnToggleRight");
    const btnCloseLeft = document.getElementById("btnCloseLeft");
    const btnCloseRight = document.getElementById("btnCloseRight");
    const panelLeft = document.getElementById("sidePanelLeft");
    const panelRight = document.getElementById("sidePanelRight");
    const overlay = document.getElementById("mobileOverlay");

    function openPanel(panel) {
        closeAllPanels();
        panel.classList.add("open");
        overlay.classList.add("visible");
        document.body.style.overflow = "hidden";
    }

    function closeAllPanels() {
        panelLeft.classList.remove("open");
        panelRight.classList.remove("open");
        overlay.classList.remove("visible");
        document.body.style.overflow = "";
    }

    if (btnToggleLeft) {
        btnToggleLeft.addEventListener("click", () => openPanel(panelLeft));
    }
    if (btnToggleRight) {
        btnToggleRight.addEventListener("click", () => openPanel(panelRight));
    }
    if (btnCloseLeft) {
        btnCloseLeft.addEventListener("click", closeAllPanels);
    }
    if (btnCloseRight) {
        btnCloseRight.addEventListener("click", closeAllPanels);
    }
    if (overlay) {
        overlay.addEventListener("click", closeAllPanels);
    }

    // Cerrar paneles al cambiar de tamaño a desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeAllPanels();
        }
    });
}

// ======================================
// UTILIDADES
// ======================================
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
