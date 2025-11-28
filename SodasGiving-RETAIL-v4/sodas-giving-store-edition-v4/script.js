document.addEventListener("DOMContentLoaded", () => {
    window.startGame = function () {
        document.getElementById("splash").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
    };
});

function setTheme(t){document.body.className=t;}

let holidayPrompts=["Everyone cheers 'SODAS-GIVING!'","Pretend you're wrapping a holiday present!","Act like you're caught in a snowstorm!","Share a happy holiday memory!","Do your best jingle-bell dance!","Say your favorite winter food!"];
let kidPrompts=["Make your funniest silly face!","Do a superhero pose!","High-five someone!","Spell your name backwards!","Act like a soda bottle shaking up!","Pretend you're a penguin for 5 seconds!"];
let chaosPrompts=["Freeze! First person to move loses!","Spin like a tornado!","Touch something red!","Count backward from 20!","Everyone switch seats!","First to clap twice avoids chaos!"];
let goldPrompts=["Swap cups for 1 round!","Give someone a compliment!","Name a soda flavor!","Do a dramatic bow!","Pick someone to be safe this round!"];

function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}

function fx(char){
 const d=document.createElement("div");
 d.textContent=char;
 d.style.position="absolute";
 d.style.left=Math.random()*100+"%";
 d.style.top="0%";
 d.style.fontSize="1.8rem";
 d.style.animation="fall 1.4s linear forwards";
 document.getElementById("fx-layer").appendChild(d);
 setTimeout(()=>d.remove(),1500);
}

let stats={prompts:0,jerk:0,rare:0,omega:0};
function updateStats(){
 document.getElementById("stat-prompts").textContent=stats.prompts;
 document.getElementById("stat-jerk").textContent=stats.jerk;
 document.getElementById("stat-rare").textContent=stats.rare;
 document.getElementById("stat-omega").textContent=stats.omega;
}
function resetStats(){stats={prompts:0,jerk:0,rare:0,omega:0};updateStats();}

function nextPrompt(){stats.prompts++;updateStats();document.getElementById("mode").textContent="Prompt";document.getElementById("prompt").textContent=pick([...holidayPrompts,...kidPrompts]);fx("🎄");fx("❄️");}
function jerkPower(){stats.jerk++;updateStats();document.getElementById("mode").textContent="The Jerk";document.getElementById("prompt").textContent="The Jerk chooses someone!";fx("🔥");}
function rarePrompt(){stats.rare++;updateStats();document.getElementById("mode").textContent="Gold Prompt";document.getElementById("prompt").textContent=pick(goldPrompts);fx("⭐");fx("⭐");}
function omegaBurst(){stats.omega++;updateStats();document.getElementById("mode").textContent="OMEGA++";document.getElementById("prompt").textContent=pick(chaosPrompts);for(let i=0;i<12;i++)fx("💥");}

let taps=0,timer=null;
function footerTap(){
 taps++;
 if(timer) clearTimeout(timer);
 timer=setTimeout(()=>taps=0,800);
 if(taps>=4){taps=0;togglePanel();}
}

function togglePanel(){
 document.getElementById("stats-panel").classList.toggle("hidden");
}

function openHowTo(){document.getElementById("howto-panel").classList.remove("hidden");}
function closeHowTo(){document.getElementById("howto-panel").classList.add("hidden");}
