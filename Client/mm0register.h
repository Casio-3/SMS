#ifndef MM0REGISTER_H
#define MM0REGISTER_H

#include <QWidget>


namespace Ui {
class mm0register;
}

class mm0register : public QWidget
{
    Q_OBJECT

public:
    explicit mm0register(QWidget *parent = nullptr);
    ~mm0register();

private slots:
    void on_pushButton_2_clicked();

    void on_pushButton_clicked();

private:
    Ui::mm0register *ui;
    bool mode;
};

#endif // MM0REGISTER_H
