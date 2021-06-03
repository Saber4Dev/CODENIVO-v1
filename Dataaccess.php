<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Dataaccess
 *
 * @author pc
 */

class Dataaccess {
       //methode connection

        public static  function connextion()
                {
                try

                   {
                   $bdd = new PDO('mysql:host=localhost;dbname=burgercode', 'root', '');
				   
		   $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
                   return $bdd;
                   }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }
                }

    //methode de mise à jour

        public static function maj($req)
                {
  try

                   {
                   $bdd= Dataaccess::connextion() ;
                   $maj=$bdd->exec($req);
                   return $maj;
                    }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }  $bdd=null;

                }


//Methode de selection

        public static function sel($req)
                {
            try{
            $bdd=self::connextion() ;
            $rep=$bdd->query($req);
return $rep ;
                 }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }  $bdd=null;


}
    
    
    
    
    
    
}
