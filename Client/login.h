#ifndef LOGIN_H
#define LOGIN_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class SMSystem; }
QT_END_NAMESPACE

class SMSystem : public QMainWindow
{
    Q_OBJECT

public:
    SMSystem(QWidget *parent = nullptr);
    ~SMSystem();

private:
    Ui::SMSystem *ui;
};
#endif // LOGIN_H
