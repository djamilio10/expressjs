{/*utilisation d'une const pour exiger express*/ }
const express=require("express");
//creation de l'objet express
const app=express();
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 pour dimanche, 1 pour lundi, etc.
    const hourOfDay = now.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
      // Les heures de travail sont du lundi au vendredi de 9h à 17h
      next(); // Continuez vers la route demandée
    } else {
      res.status(403).send('L\'application n\'est disponible que pendant les heures ouvrables.');
    }
  };
  
app.use(checkWorkingHours);
  {/*pour pouvoir utiliser le fichier css*/}
  app.use(express.static("public"))
{/*utilisation de app.set pour configuration de ejs*/}
app.set("view engine","ejs");
app.set("views","IHM");
{/*pour naviguer sur le home page*/}
app.get("/",(req,res)=>{
    res.status(200).render("home-page");
});
{/*pour naviguer dans la page de service */}
app.get("/services",(req,res)=>{
    res.status(200).render("services");
});
{/*pour naviguer sur la page de Contact page*/}
app.get("/contact",(req,res)=>{
    res.status(200).render("contact");
});
{/*pour naviguer sur le serveur 3000*/}
app.listen(3000,()=>{
    console.log("le serveur est lancé sur le port 3000")
})
