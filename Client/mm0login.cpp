#include "mm0login.h"
#include "ui_mm0login.h"
#include "mm0register.h"

mm0login::mm0login(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::mm0login)
{
    ui->setupUi(this);
    setWindowFlags(windowFlags()&~Qt::WindowMaximizeButtonHint&~Qt::WindowContextHelpButtonHint);
    setFixedSize(this->width(), this->height());     // 设置登录窗口不显示帮助按钮、并固定窗口大小
    ui->UserPwd->setEchoMode(QLineEdit::Password);    // 设置密码输入框为密码输入模式（不显示明文）;
    //dlgReg = new mm0register(this);
}

mm0login::~mm0login()
{
    delete ui;
}

void mm0login::on_btnlogin_clicked()
{

}

void mm0login::on_btnreg_clicked()
{
    dlgReg->show();
}
