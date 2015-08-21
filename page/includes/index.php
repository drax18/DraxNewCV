<section class="myname parallax-window animatedParent animateOnce" id="anchor-home">
    <header class="animated bounceInDown delay-1500">
        <h2>Báder László</h2>
        <h3>Front-end fejlesztő</h3>
    </header>
</section>
<section class="aboutme" id="anchor-aboutme">
    <div class="container">
        <h1 class="text-center">Rólam</h1>
        <div class="row">
        </div>
    </div>
</section>
<section class="resume" id="anchor-resume">
    <div class="container">
        <h1 class="text-center">Önéletrajz</h1>
        <div class="row">
        </div>
    </div>
</section>
<section class="skills" id="anchor-skills">
    <div class="container">
        <h1 class="text-center">Készségek</h1>
        <div class="row">
            <div class="col-lg-4">
                <div class="frontend-title">Front-end fejlesztés</div>
            </div>
            <div class="col-lg-1">
                <div class="connect"></div>
            </div>
            <div class="col-lg-7">
                <div class="skill-wrapper animatedParent animateOnce">
                    <div class="html5 animated bounceOutLeft"><div class="bar animated"></div><div class="percent">0</div></div>
                    <div class="css3"><div class="bar animated"></div><div class="percent">0</div></div>
                    <div class="javascript"><div class="bar animated"></div><div class="percent">0</div></div>
                </div>
            </div>
            <div class="col-xs-12 text-center more"><b>Egyéb:</b> Bootstrap, Materialize, Modernizr, Parallax, Bower/npm, Less/Sass/Scss, Git, Php5, MySql, Codeigniter, Photoshop.</div>
            <div class="col-xs-12 text-center valid">Ezeken felül tapasztalatom van pixel pontos, valid, és böngésző független kódolásban.</div>





        </div>
    </div>
</section>
<section class="myworks" id="anchor-myworks">
    <div class="container-fluid nopadding">
        <h1 class="text-center">Munkáim</h1>
        <div class="created-date">
                <i>2015-ben elkészített projectek</i>

        </div>
        <div class="newworks">
            <a href="index.php" target="_blank">
                <div class="work-name animatedParent"><span class="animated bounceInLeft">Weboldal Önéletrajz<i class="fa fa-angle-double-right"></i></span></div>
                <img src="page/img/work1.png" alt="CV"/>
            </a>
        </div>
        <div class="newworks">
            <a href="page/works/resto/" target="_blank">
                <div class="work-name animatedParent"><span class="animated bounceInLeft">Resto<i class="fa fa-angle-double-right"></i></span></div>
                <img src="page/img/work2.png" alt="Resto"/>
            </a>
        </div>
    </div>
</section>
<section class="contactme" id="anchor-contactme">
    <div class="container">
        <h1 class="text-center">Kapcsolat</h1>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="contact-info">
                    <h2>Elérhetőségeim</h2>
                    <ul class="list-unstyled">
                        <li>
                            <label><i class="fa fa-envelope-o"></i></label><a href="mailto:someone@example.com" target="_top">bader.laszlo22@gmail.com</a>
                        </li>
                        <li>
                            <label><i class="fa fa-mobile"></i></label><a href="#">+36 70 251 7738</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>Írj e-mail-t</h2>
                <?php
                if (isset($_POST['submit'])) {
                    $url = "https://www.google.com/recaptcha/api/siteverify";
                    $privatekey = "6Lf1UgsTAAAAALURhhVxEZxyNJTCqIwiW9TW_rjD";
                    $response = file_get_contents($url . "?secret=" . $privatekey . "&response=" . $_POST['g-recaptcha-response'] . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
                    $data = json_decode($response);
                    $uzenet = "";
                    if (isset($data->success) and $data->success == true) {
                        $bool = true;
                    } else {
                        $bool = false;
                    }
                    if ($bool == true) {
                        $nev = $_POST['name'];
                        $email = $_POST['email'];
                        $subject = $_POST['subject'];
                        $message = $_POST['message'];
                        $uzenet .= "Név: $nev" . "<br />";
                        $uzenet .= "E-mail: $email" . "<br />";
                        $uzenet .= "Üzenet:" . "<br />";
                        $uzenet .= $message;
                        $to = "bader.laszlo22@gmail.com";
                        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                        mail($to, $subject, $uzenet, $headers);
                        ?>
                        <div class="text-center emailsuccess"><b>Sikeresen elkülted a levelet!</b>
                        </div>
                        <?php

                    } else {
                        ?>
                        <div class="text-center animated emailsuccess fadeOutUp"><b>Hiba történt! Nem sikerült a levél
                                elküldése!</b>
                        </div>
                        <?php
                    }
                }
                ?>

                <form method="post" action="index.php#anchor-contactme">
                    <div class="form-group">

                        <input id="name" type="text" class="form-control" name="name" placeholder="Név"
                               required="required"/>

                    </div>
                    <div class="form-group">

                        <input id="email" type="email" class="form-control" name="email" placeholder="E-mail"
                               required="required"/>

                    </div>
                    <div class="form-group">

                        <input id="subject" type="text" class="form-control" name="subject" placeholder="Tárgy"
                               required="required"/>

                    </div>
                    <div class="form-group">

                        <textarea id="message" class="form-control" required="required" placeholder="Üzenet"
                                  name="message"></textarea>

                    </div>
                    <div class="text-center">
                        <button class="btn" type="submit" name="submit">Küldés<i class="fa fa-paper-plane-o"></i>
                        </button>
                    </div>
                </form>

            </div>

        </div>
    </div>
</section>


