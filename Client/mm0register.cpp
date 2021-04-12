#include "mm0register.h"
#include "ui_mm0register.h"

mm0register::mm0register(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mm0register)
{
    ui->setupUi(this);
    setWindowFlags(windowFlags()&~Qt::WindowMaximizeButtonHint&~Qt::WindowContextHelpButtonHint);
    setFixedSize(this->width(), this->height());     // 设置注册窗口不显示帮助按钮、并固定窗口大小
}

mm0register::~mm0register()
{
    delete ui;
}
