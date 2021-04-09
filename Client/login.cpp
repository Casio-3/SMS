#include "login.h"
#include "ui_smsystem.h"

SMSystem::SMSystem(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::SMSystem)
{
    ui->setupUi(this);
}

SMSystem::~SMSystem()
{
    delete ui;
}

