#include "mm0login.h"
#include "ui_mm0login.h"
#include "mm0register.h"

mm0login::mm0login(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mm0login)
{
    ui->setupUi(this);
    setWindowFlags(windowFlags()&~Qt::WindowMaximizeButtonHint&~Qt::WindowContextHelpButtonHint);
    setFixedSize(this->width(), this->height());     // 设置登录窗口不显示帮助按钮、并固定窗口大小
    ui->UserPwd->setEchoMode(QLineEdit::Password);    // 设置密码输入框为密码输入模式（不显示明文）;
}

mm0login::~mm0login()
{
    delete ui;
}

void mm0login::on_btnlogin_clicked()
{
    //if登陆成功
    //跳转到mainwindow
    //else messagebox(分类讨论“blabla”)
}

void mm0login::on_btnreg_clicked()
{
    this->close();
    mm0register *dlgReg = new mm0register;
    dlgReg->show();
}
