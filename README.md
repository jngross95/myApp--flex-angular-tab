## flex

in den body der index.html:

<body class="h-screen  flex flex-col ">

einmalig 'h-screen'   für die 100vh   h bedeutet höhe nicht horizonatl...    

dann wie immer für den container:

'flex'  und wenn Vertikal ausgerichtet werden soll 'flex-col'. Achtung 'flex-col' alleine reicht nicht aus.

jetzt werden die Children nach den flex-Regeln angeordnet. Normalrweise werden die elemente einfach horiz/vertikal gestapelt.

Child-Elemente beeinflussen

'flex-auto' : Die Grössse des Child fenster wird so verändert dass der Platz ausgefüllt wird. 
                 Wenn das Child kleiner ist, wird es vergrössert!
                 Wenn das Child grösser ist, wird es nicht verkleinert, --> Globale scrollbar schaltet sich ein.  (lösst sich mit overflow-y-scroll verhindern)

Trick: mit h-0   Setzen der Höhe des Fensters auf einen kleinen Wert, kann erreicht werden, 
                    das flex genau die Grösse setzt damit das Fenster exakt ausgefüllt wird.
                 --->  Dadurch wird der Scrollbar nicht sichtbar. (Nur in Extrem situationen)
                   der scrollbar muss also nicht deaktiviert werden. Besser nicht deaktivieren, dann siet msn 
                    ob allesok ist.   mit class="bg-red-100" prüfen wie gross das Element vom flex-System berechnet ist.

Bei der Tabelle woe also der Scroller sichtbar sein soll:

 <div class="flex-auto  h-0    overflow-y-scroll 

zusätzlich 'overflow-y-scroll '   dadurch wird das zu grosse fenster gescrollt und es wird niemals grösseer als vom flex-System vorgegeben.

------------

Achtung An divs muss die flex-Berechnung durchgeschleust werden. Das geht mit einem 

<div class="flex-auto     flex flex-col">

Einmal ist es ein Child und es ist ein Container ...