<?php  namespace arafat;

class Bap {
  public $age = 18;
  protected $password = 'secret';
  public $fname = 'shibu';
  public $lastname = 'dev';
  public function fullName () {
    return $this->fname . $this->lastname;
  }
  public function showPassword () {
    return $this->password;
  }
}

class Beta extends Bap {
  public function showBapKapassword () {
    return $this->password;
  }
}

$obj = new Beta();
echo $obj->showBapKapassword();



