<script>

export default {
  name: "testimonios",
  emits:["mainEvent"],
}

function vermas1(id){
  if(id=="mas1"){
    document.getElementById("desplegar1").style.display="block";
    document.getElementById("mas1").style.display="none";
  }
  else{
    document.getElementById("desplegar1").style.display="none";
    document.getElementById("mas1").style.display="inline";
  }
}
vermas1()
function vermas2(id){
  if(id=="mas2"){
    document.getElementById("desplegar2").style.display="block";
    document.getElementById("mas2").style.display="none";
  }
  else{
    document.getElementById("desplegar2").style.display="none";
    document.getElementById("mas2").style.display="inline";
  }
}
vermas2()
function vermas3(id){
  if(id=="mas3"){
    document.getElementById("desplegar3").style.display="block";
    document.getElementById("mas3").style.display="none";
  }
  else{
    document.getElementById("desplegar3").style.display="none";
    document.getElementById("mas3").style.display="inline";
  }
}
vermas3()
function vermas4(id){
  if(id=="mas4"){
    document.getElementById("desplegar4").style.display="block";
    document.getElementById("mas4").style.display="none";
  }
  else{
    document.getElementById("desplegar4").style.display="none";
    document.getElementById("mas4").style.display="inline";
  }
}
vermas4()
function vermas5(id){
  if(id=="mas5"){
    document.getElementById("desplegar5").style.display="block";
    document.getElementById("mas5").style.display="none";
  }
  else{
    document.getElementById("desplegar5").style.display="none";
    document.getElementById("mas5").style.display="inline";
  }
}
vermas5()
</script>

<template>

  <div id="divTestimonios">
    <div class="divTestimonio">
      <img src="../assets/img/mujer3.jpg" alt="" class="imgMujer1">
      <h2>Andrea Jimenez </h2>
      <p class="texto1">
        Andrea se seca las lágrimas a medida que cuenta su relato. La voz se le entrecorta y aún no se explica cómo llegó a esta situación. Hace cuatro años que estaba en pareja con un hombre que la encerraba en la casa mientras él trabajaba. Vivían en una ciudad del interior provincial.

        <br>"Él salía a las 8 de la mañana a trabajar y volvía a las 8 de la noche. Yo temía que, ante una emergencia con nuestra hija de 1 año, no pudiéramos salir a buscar ayuda. Tampoco me podía escapar porque no tenía adónde ir", cuenta Andrea en diálogo con La Voz.

        <a href="#" onclick="vermas1('mas1');" id="mas1">... [leer más]</a>
      </p>
      <p id="desplegar1" style="display:none;" class="texto1">

        El comienzo del aislamiento obligatorio dispuesto por el Gobierno nacional a raíz de la pandemia del coronavirus los encontró en una situación particular. “Él (por su pareja) se quedó sin trabajo y me dijo que nos fuéramos a Córdoba, donde tenía ‘algo’. Pero no era así. Estuvimos una semana viviendo en la Terminal de Ómnibus con la nena hasta que vinieron de la Municipalidad a decirnos que nos trasladarían a una pensión porque ya no podíamos quedarnos allí. Yo no sabía de la gravedad de la situación porque no veía las noticias”, explica.<br>

        “Como él se mostraba amable ante el resto de la gente, mientras estuvimos en la terminal no me violentó nunca. Pero el día que llegamos a la pensión, me golpeó mucho y me quiso tirar del balcón”, recuerda angustiada.<br>

        Fue allí cuando Andrea pudo encontrar la ayuda que necesitaba. La administradora de la pensión echó al hombre, llamó a la Policía y, al otro día, Andrea, aconsejada por otras mujeres del lugar, realizó la denuncia en el Polo de la Mujer. Él se dio a la fuga.<br>

        Andrea recibió en el Polo la contención que necesitaba y ahora espera, en un lugar seguro, que pase la cuarentena para comenzar una nueva vida junto con su hija. Con sus otros dos hijos mantiene contacto por videollamadas debido a las medidas de aislamiento social. “Con el papá de los chicos tengo buena relación, por suerte”, dice aliviada. Al reflexionar sobre este tipo de situaciones de violencia que afecta a tantas mujeres, Andrea no duda: “La ayuda de la familia es importante; si no la tenés, como yo, se complica más. Pero hay que pensar en los hijos y en que no pueden criarse en un ambiente tan feo”.<br>

        El caso de Andrea no es aislado. Muchas mujeres que sufren violencia de género se ven obligadas por la cuarentena a quedarse encerradas con sus agresores y el pedido de ayuda se dificulta en ese contexto. Por eso desde espacios institucionales como el Ministerio de las Mujeres de la Nación y el de la Provincia, como también desde organizaciones sociales locales e internacionales, advirtieron que el aislamiento obligatorio podría agravar las situaciones de violencia.<br>
        <a href="#" onclick="vermas1('menos1');" id="menos1">... [leer menos]</a>
      </p>
    </div>
    <div class="divTestimonio">
      <img src="../assets/img/mujer1.jpg" alt="" class="imgMujer1">
      <h2>Amanda González</h2>
      <p class="texto1">
        “La mayoría de las veces me callaba. Al principio discutía con él. Soy una persona con mucho carácter, pero acabó comiéndome y llegó un momento en el que me hice muy pequeña y débil”. Quien habla es Amanda Gonzalez , una madrileña que con tan solo 15 años sufrió diversas agresiones por parte de su pareja, con la que estuvo tres años. <br>
        Él tenía por aquel entonces 17 años y su relación duró tres. Tres años de sufrimiento. “Creo que tampoco era consciente de la gravedad. Yo me dejé llevar por él, tenía fijación, creo que no era ni enamoramiento. En esos momentos no pensaba en nada más que en él, ni siquiera pensaba en mí”. "Supongo que él ya era así, pero tenía otra cara no visible, y yo no lo noté"
        <a href="#" onclick="vermas2('mas2');" id="mas2">... [leer más]</a>
      </p>
      <p id="desplegar2" style="display:none;" class="texto1">
        Amanda cuenta que al principio todo era muy bonito, pero poco a poco él iba cambiando su forma de ser. “Supongo que él ya era así, pero tenía otra cara no visible y yo no lo noté. Luego fui dándome cuenta de que no era la persona que me había mostrado”. La víctima sostiene que llegó un momento en el que todo eran discusiones llenas de gritos e insultos, montaba escenas en la calle y tergiversaba las peleas para llevar siempre la razón. “No entendía por qué quería buscar conflicto todo el rato y tampoco entendía por qué me hacía sentir tan mal con ciertos comentarios o insultos que me decía”.<br>
        Loca, hija de puta o zorra eran los insultos que más recibía. Sin embargo, el agresor se mostraba encantador delante de su circulo de amistades. Aparentaba ser una persona normal, aunque la víctima reconoce que era un chico conflictivo, que en ocasiones consumía drogas y no andaba con buenas compañías. “A mis amigas nunca les gustó para mí”, relata la joven, “pero bueno, al final era mi pareja y supongo que no les quedaba otra que aceptarlo”. Y su familia fue completamente ajena a la espiral de violencia en la que vivía la joven: “Mis padres le conocían del barrio, pero no personalmente, ellos tampoco sabían cómo estaba yo con él ni los problemas que había, porque nunca conté nada hasta el final”. <br>
        Amanda aguantó hasta el final para contarlo, y lo contó porque no podía más. “Yo quería convencerme de que él en el fondo era bueno. Estaba ciega con él y no quería darme cuenta de cómo era realmente. Quería ahorrarles un sufrimiento y un enfado a mis padres. Sabía que, si les contaba todo eso, ellos no lo iban a permitir y me iban a intentar separar de él”.<br>
        "Buscaba cualquier discusión para que yo no disfrutase cuando salía con amigas"<br>
        La víctima sostiene que era tan dependiente de él que hasta su estado de ánimo cambiaba con una simple discusión con su pareja: “Cualquier discusión me hacía estar mal en todos los sentidos, tanto con mi familia como con mis amigos. Cambiaba mi estado de ánimo y mi carácter también”.<br>

        <a href="#" onclick="vermas2('menos2');" id="menos2">... [leer menos]</a>
      </p>
    </div>
    <div class="divTestimonio">
      <img src="../assets/img/mujer5.jpg" alt="" class="imgMujer1">
      <h2>Tamara Mares</h2>
      <p class="texto1">
        “En 18 años de matrimonio sufrí violencia psicológica, económica y física hasta que finalmente decidí sacar de mi vida a mi esposo. Su familia le justificaba no pagar pensión alimenticia porque decían que yo lo había corrido. Cuando le pedí dinero para los libros de sus hijos me respondió: “no sabes con quién te metiste ni lo que te espera, pinche vieja burra”<br>
        “Él había sido un gran amigo al que le confiaba mis cosas y sabía mucho de mí. No lo dejaba por temor a represalias y constantes amenazas. Me costó mucho armarme de valor y dar el paso definitivo para dejarlo y no temerle más.
        <a href="#" onclick="vermas3('mas3');" id="mas3">... [leer más]</a>
      </p>
      <p id="desplegar3" style="display:none;" class="texto1">
        “El feminismo entró a mi vida y me permitió tomar valor para denunciar la violencia, no sólo en mi vida privada, sino en las instituciones, porque desde que puse un pie en las oficinas del Ministerio Público me cuestionaron por qué denunciaba “si eso ya tenía tiempo”. Me dijeron que si estaba segura, que lo podían meter a la cárcel y que luego las mujeres cambiamos de opinión. Finalmente les dije: ¿si yo fuera hombre me estarían preguntando lo mismo?<br>
        “Encontré un sitio en línea llamado Háblalo, donde un abogado me asesoró y una psicóloga me orientó, pero ese centro desapareció con el cambio de gobierno, así que me volví a quedar sola.<br>

        “Llevo meses luchando y solo me mueve la firme idea de que tengo derechos. Aunque también tengo miedo, estoy aprendiendo que debo valorarme, quererme, porque estoy educando a un joven y una jovencita. Quiero que se amen y se respeten para que puedan tener relaciones sanas. <br>

        “En todo este proceso he visto con tristeza cómo mujeres juzgan, destrozan y violentan los derechos de otras mujeres y eso debe detenerse. Aprendamos a ser solidarias, de eso se trata este movimiento. Solidaridad entre nosotras para, juntas, poder luchar contra tanta violencia”.<br>
        <a href="#" onclick="vermas3('menos3');" id="menos3">... [leer menos]</a>
      </p>
    </div>
    <div class="divTestimonio">
      <img src="../assets/img/mujer4.jpg" alt="" class="imgMujer1">
      <h2>Elizabeth Cano</h2>
      <p class="texto1">
        Elizabeth Cano tiene 47 años y hace solo tres años y medio que empezó a vivir. Ha pasado media vida al lado de un hombre que la “maltrató físicamente y mentalmente” durante 28 años. Compartió sus días al lado de lo que ella describe como una persona “perversa”, “narcisista”, “egoísta” y sin “conciencia”, que la ha dejado marcada de por vida. “Fueron tantas”, asegura Elizabeth, que a día de hoy su mente ha olvidado las veces que su exmarido, un bien posicionado arquitecto de Barcelona, la agredió durante todos los años que estuvieron juntos.
        <a href="#" onclick="vermas4('mas4');" id="mas4">... [leer más]</a>
      </p>
      <p id="desplegar4" style="display:none;" class="texto1">
        Hoy, Elizabeth cuenta su historia en NIUS, con el objetivo de mostrar una “realidad existente, que está a la vuelta de la esquina y que puede pasarle a cualquier mujer, independientemente de su estatus social, cultura o tradición”.<br>
        28 años aguantando insultos, agresiones: “Me partió los dientes de un guantazo”<br>
        Todo empezó con una niña de 17 años que nunca había salido de casa. “Conocí a un chico muy amable, agradable y que intentaba darme pena contándome que en su casa le pegaban. Por empatía me acerqué a él, pero pronto empezó a estar muy encima de mi y a obsesionarse. Ya no supe salir del pozo”.<br>
        Elizabeth pensaba que era el hombre de su vida, desde pequeña le habían contado que el “primer amor es para siempre” y eso le hizo convencerse de que no podía dejarle. Estuvieron saliendo 10 años y antes de casarse ella no estaba convencida. “Yo no sabía si realmente quería casarme, ya había visto como era, e incluso mi familia me pidió que no me casara, pero era mi primer amor, había vivido las primeras experiencias juntos y él me dijo ¿cómo vas a dejarme, Elizabeth?”.<br>
        “Pensé que era lo que me ha tocado vivir, que el amor podía con todo”
        A partir de entonces Elizabeth aprendió a vivir con la inquietud e inseguridad en el cuerpo cada vez que estaba en casa. Suspiraba por si lo que hacía podía molestar a su marido y en consecuencia caerle una “fuertísima bronca que podía durar incluso días”.<br>

        “Todas las agresiones venían por cosas que a él le molestaban. Por la cena, por mi ropa... ya ni me acuerdo las veces que me agredió. Un día en medio del centro comercial me partió los dientes de un guantazo”. Elizabeth recuerda que fuera del hogar era un hombre amable, respetuoso y “aparentemente normal”. Nadie sospechaba, ya que la familia vivía “como en una burbuja” ajena completamente a lo que pasaba en el exterior.<br>

        “La violencia machista no entiende de clases; está a la vuelta de la esquina”<br>
        Sin independencia económica, sin conexión a Internet, sin poder salir con amigas, Elizabeth vivía por y para su marido. Así lo recuerda, hasta que un día Alexia, su hija mayor, tras ver diariamente cómo su padre maltrataba a su madre advirtió a Elizabeth que o se marchaban o acabaría matándola: “Mamá, no ves cómo es papá, es un monstruo, tenemos que irnos de casa o te matará”.<br>

        De ese día hace ya tres años y medio. Esa fue la primera vez que Elizabeth abrió los ojos y dio el paso de denunciar a su marido y separarse. Desde entonces vive con sus hijas en la misma casa, ha vuelto a trabajar de enfermera y lucha día a día para salir adelante con todo. “Ha intentado quitármelo todo, el quiere verme en la calle, pero por dignidad saldré adelante con mis hijas y lucharé por superar esto. Me ha hecho demasiado daño y nunca podré perdonarle porque él siempre fue consciente”, espeta emocionada.<br>
        “Me pregunto si la fiscal aguantaría 24 horas en lo que era mi vida al lado de ese señor”<br>
        Ahora Elizabeth ya no vive con la intranquilidad de que a su marido “no le guste la cena o la blusa que lleva". Ahora puede volver a dormir por la noche. Sin embargo, el miedo de que vuelva a acercarse a ella persiste y asegura que los jueces no “complican la situación”. “La violencia de género te persigue toda la vida, y eso parece que los jueces y fiscales del país no lo sepan. No tienen ni idea, necesitan mucha más formación y que entiendan por lo que hemos pasado Siempre me preguntó si la fiscal que llevó mi caso aguantaría 24 horas en lo que era mi vida al lado de ese señor”, lamenta.<br>

        Las secuelas de las escenas de violencia que se vivieron durante años en casa de Elizabeth también marcaron de por vida a sus hijas. Por ello, Elizabeth lo deja claro: “Un maltratador nunca es un buen padre, él nunca lo ha sido y ha obligado a sus hijas a pasar por algo muy duro”. Una de sus hijas explica a NIUS que recuerda su casa “como una cárcel” y que al separarse “empezó a ver mundo”.<br>

        Elizabeth asegura que ha podido superar la situación gracias a sus hijas, a su familia y a la asociación Ana Bella, que la ha acompañado durante todo el proceso dándole apoyo psicológico. Ahora se ve una mujer fuerte, luchadora y con ganas de volver a vivir. Se define como una “superviviente” y ha decidido contar su historia para concienciar a todas las mujeres y animarlas a que no resigna, no justifiquen y den el paso para “empezar a vivir”. Elizabeth sigue adelante. En estos momentos, sus hijas viven con ella y el caso está pendiente de juicio, según explica.<br>
        <a href="#" onclick="vermas4('menos4');" id="menos4">... [leer menos]</a>
      </p>
    </div>
    <div class="divTestimonio">
      <img src="../assets/img/mujer6.jpg" alt="" class="imgMujer1">
      <h2>Maria De los Angeles </h2>
      <p class="texto1">
        Llegué a este país hace 4 años, llena de sueños e ilusiones, al igual que otras personas inmigrantes.<br>

        En mi caso, el motivo principal, fue venir a convivir con mi esposo que ya se había trasladado a España hacia unos años y así trabajar juntos para poder traer a mis hijos y darles un futuro mejor.<br>

        A partir de ese momento, se volvió a repetir la historia de maltrato vivida en el pasado, pero pese a ello, no quise admitirlo disculpándole, echándole la culpa de la situación al alcohol, porque cuándo bebía se convertía en un hombre mucho más grosero y cruel.<br>
        <a href="#" onclick="vermas5('mas5');" id="mas5">... [leer más]</a>
      </p>
      <p id="desplegar5" style="display:none;" class="texto1">
        Recuerdo su imagen de antes, la de un hombre muy gracioso, cariñoso, tierno que llegó a mi vida un día de verano, y lo que más me llamó la atención, es que me hizo reír mucho.

        Pero la cara contraria, la descubrí mucho mas tarde, ya casada.<br>

        La primera vez destrozó toda la casa, rompió los cristales de la ventana y me dio un golpetazo en la espalda. A raíz de esto tuvimos una primera separación, pero luego, sinceramente, no sabia lo que nos sucede a tantas mujeres, que hace que vuelvas a darle una o más oportunidades.<br>

        He tenido muchísimos intentos de terminar con él y he regresado siempre a lo largo de 20 años, por mis hijos, porque creía que le quería, porque él me decía que no volvería a pasar, porque me pedía perdón, me convencía de que se debía a la bebida y que no estaba en sus cabales. Siempre, detrás de ello le perdonaba, le amaba y creía sus mentiras. Solo hasta el momento que sentí que mi vida corría peligro, decidí abandonarle y renunciar a sus promesas, a mis sueños de amor junto a él, el hombre del que en su día me había enamorado, el padre de mis hijos <br>

        Durante los años que sufrí maltrato, me llegue a sentir culpable muchas veces, porque él me menospreciaba y humillaba. Me decía: " Si te quedas sola, que vas a hacer¿te vas a quedar con una mano delante y otra detrás¿si te separas nunca vendrán nuestros hijos a España, ya me encargare yo de esto", "ten cuidado con lo que haces, que yo ando con gente¿..Te vas a acordar de mí como me metas en algún lío".<br>

        Durante las discusiones, evitaba enfrentarme a él optando por callarme por temor a que se enfadara. "Yo luchaba porque él estuviera bien, ¿que no se enfadara". Para calmarme y quitarme la angustia que sufría, el nudo en el estomago y en la garganta, tomaba infusiones relajantes, hacia grandes esfuerzos por tranquilizarme y no paraba de pensar en qué fallaba en mi comportamiento como esposa y como madre para que me maltratase de esta manera. Padecí pesadillas por la noche, y durante el día me invadía la tristeza, no tenía ganas de salir, hablar o reír¿ Temblaba cuando pensaba como me martirizaba, cuando se acercaba la hora en que él volvía a casa<br>

        Al estar aquí me di cuenta que no era normal permitir que una persona que yo amaba muchísimo, estuviera con otra mujer y su reacción fuera la de insultarme y abofetearme al descubrirlo, cuando era algo en lo que yo no estaba faltando, que el que estaba faltando a su palabra a su compromisos conmigo era él. Yo lo había respetado y cumplido con él y era él el que no estaba cumpliendo conmigo, ni siquiera ahora que nuestros hijos estaban ya en España con nosotros¿ Eso me entristeció y me hizo pensar detenidamente en la situación que estaba viviendo, y en las que había vivido en el pasado.<br>

        No podía continuar así y ante todo lo hice por mis hijos, fue lo que me llevo a decir no puedo permitir esta situación más. Soy yo o es él. Me sentí con fortaleza y confianza y decidí denunciarle.<br>

        Luego nos trasladaron a mis hijos y a mí a un centro para mujeres, donde nos sentimos muy apoyados y acogidos y eso ha sido fundamental para mí, para poder mantenerme firme en la decisión que había tomado.<br>

        No me arrepiento de la decisión tomada, al contrario gracias a ella estoy viva y contar mi historia, para mí es contar al mundo el valor de una mujer que representa a muchas mujeres.<br>

        Hoy se, que él es un agresor, un hombre cruel, egoísta y posesivo, que no se merecía mi cariño, ni mi compañía,¿.. Que mi sufrimiento era en vano, que él no iba a cambiar, ni iba a ser aquel hombre que, teniendo yo 14 años, me conquistó, del que me enamore y con el que yo soñé en crear una familia, y que fuera el padre de mis hijos<br>

        Ahora mi vida ha cambiado. Ahora tengo a mi hija conmigo y a una nieta que ha traído alegría a nuestra vida.<br>

        Cada día tengo más confianza en los demás y conmigo misma. Esos temores, miedos, esa necesidad de tener a un hombre que me proteja, ahora mismo ya no es algo fundamental en mí.
        El hecho de haber vivido esta experiencia me ha hecho valorarme muchísimo, que no puedo permitir que esto vuelva a ocurrir de ninguna manera, que la persona que se acerque a mi tiene que demostrarme lo importante que soy, lo mucho que valgo, que esta dispuesta a amarme, pero amor verdadero sin daño, sin manipulación, sin abuso, sin mentiras, porqué las cosas que más daño me hicieron, fueron el engaño y la mentira, el siempre decir que las cosas van a cambiar y el darle una nueva oportunidad.

        Si algo he aprendido de esta experiencia es que te menosprecien, te humillen y te hagan sentir como lo más insignificante del mundo no se puede consentir de ninguna manera.

        Tengo trabajo y sigo recibiendo ayuda psicológica, social y cuento con apoyo por parte de las personas que me entienden, me quieren y han compartido conmigo esta dura experiencia y a quien les doy mi eterno agradecimiento.
        <a href="#" onclick="vermas5('menos5');" id="menos5">... [leer menos]</a>
      </p>
    </div>
  </div>

</template>

<style>

@import "../assets/css/testimonios.css";

</style>